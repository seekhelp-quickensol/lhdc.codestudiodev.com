// components/ExcelDownloadButton.tsx
'use client';

import { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import instance from '@/src/utils/axios-instance';
import Button from '@/src/components/admin/ui/button/Button';
import toast from 'react-hot-toast';

interface ExcelDownloadButtonProps {
  /** API endpoint to fetch the data */
  apiEndpoint: string;
  /** File name prefix (without .xlsx) */
  fileNamePrefix: string;
  /** Sheet name in the generated Excel */
  sheetName?: string;
  /** Column headers for the Excel file */
  headers: string[];
  /** Function that transforms raw API row data into Excel row array */
  rowMapper: (row: any) => any[];
  /** Initial/current filters from parent component */
  filters?: Record<string, any>;
  /** Optional: custom button text */
  buttonText?: string;
  /** Optional: additional axios config (headers, auth, etc.) */
  axiosConfig?: any;
  /** Optional: custom payload preparation function */
  preparePayload?: (filters: Record<string, any>) => any;
}

export default function ExcelDownloadButton({
  apiEndpoint,
  fileNamePrefix,
  sheetName = 'Report',
  headers,
  rowMapper,
  filters = {},
  buttonText = 'Download Excel Report',
  axiosConfig = {},
  preparePayload,
}: ExcelDownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const downloadExcel = async () => {
    setLoading(true);
    try {
      // Default payload structure (DataTables-like)
      const defaultPayload = {
        draw: 1,
        start: 0,
        length: 10000, // large number = hopefully get everything
        search: { value: filters.searchValue || '' },
        order: [{ column: -1, dir: 'desc' }],
      };

      const payload = preparePayload ? preparePayload(filters) : defaultPayload;

      // Prepare query params from filters (remove undefined/empty)
      const params = Object.fromEntries(
        Object.entries(filters)
          .filter(([_, value]) => value !== undefined && value !== '')
          .map(([key, value]) => [key, String(value)])
      );

      const response = await instance.post(apiEndpoint, payload, {
        params,
        ...axiosConfig,
      });

      // Assuming your API returns { data: rows[] } where rows are arrays
      const rows = response.data?.data || response.data?.rows || [];

      if (!Array.isArray(rows) || rows.length === 0) {
        // throw new Error('No data received from server');
        toast.error("No data received from server");
        return
      }

      // Transform data for Excel
      const excelData = [
        headers,
        ...rows.map(rowMapper),
      ];

      // Create worksheet & workbook
      const worksheet = XLSX.utils.aoa_to_sheet(excelData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

      // Auto-size columns (reasonable width)
      worksheet['!cols'] = headers.map(() => ({ wch: 16 }));

      // Generate and download file
      const fileName = `${fileNamePrefix}-${new Date().toISOString().split('T')[0]}.xlsx`;
      XLSX.writeFile(workbook, fileName);

      // Optional success feedback
      // You can replace alert with toast notification library
      toast.success("Excel file downloaded successfully!");
    } catch (error) {
      console.error('Excel download failed:', error);
      toast.error("Failed to download Excel. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={downloadExcel}
      disabled={loading}
      variant='primary'
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
          </svg>
          Downloading...
        </>
      ) : (
        buttonText
      )}
    </Button>
  );
}