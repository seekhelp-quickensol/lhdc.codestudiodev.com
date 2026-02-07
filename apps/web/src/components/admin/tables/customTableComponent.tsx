"use client";

import instance from "@/src/utils/axios-instance";
import React, { useState, useEffect, useCallback } from "react";
import DataTable, { TableColumn, SortOrder } from "react-data-table-component";

interface SearchValue {
  value: string;
}

interface OrderItem {
  column: number;
  dir: string;
}

interface RequestData {
  draw: number;
  start: number;
  length: number;
  search: SearchValue;
  order: OrderItem[];
}

interface ResponseData {
  data: any[];
  recordsFiltered: number;
}

interface CustomDataTableProps {
  tableName?: string;
  url: string;
  columns: TableColumn<any>[];
  refresh?: boolean | number;
  message?: string;
  search?: boolean;
  demoMode?: boolean;              // NEW: demo mode flag
  sampleResponse?: ResponseData;   // NEW: sample response data
}

const CustomDataTable: React.FC<CustomDataTableProps> = ({
  url,
  columns,
  refresh = false,
  search = false,
  demoMode = false,
  sampleResponse,
}) => {
  const [items, setItems] = useState<any[]>([]);
  const [totalRows, setTotalRows] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [searchText, setSearchText] = useState<string>("");
  const [orderDirection, setOrderDirection] = useState<string>("DESC");
  const [orderColumn, setOrderColumn] = useState<number>(0);

  const fetchItems = useCallback(
    async (
      page: number,
      perPage: number = 10,
      search: string = ""
    ): Promise<void> => {
      setLoading(true);

      // ✅ If demo mode is enabled, use sampleResponse instead of API
      if (demoMode && sampleResponse) {
        setItems(sampleResponse.data);
        setTotalRows(sampleResponse.recordsFiltered);
        setLoading(false);
        return;
      }
      
      const draw = page;
      const start = (page - 1) * perPage;
      const length = perPage;

      const jsonData: RequestData = {
        draw,
        start,
        length,
        search: { value: search },
        order: [
          {
            column: orderColumn,
            dir: orderDirection,
          },
        ],
      };

      try {
        const response = await instance.post<ResponseData>(url, jsonData);
        const json = response.data;
        setItems(json.data);
        setTotalRows(json.recordsFiltered);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    },
    [url, orderColumn, orderDirection, refresh, demoMode, sampleResponse]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchItems(page, perPage, searchText);
    }, 500);
    return () => clearTimeout(timeout);
  }, [
    searchText,
    page,
    perPage,
    fetchItems,
    refresh,
    orderColumn,
    orderDirection,
  ]);

  const handlePageChange = (page: number): void => setPage(page);

  const handlePerRowsChange = async (
    newPerPage: number,
    page: number
  ): Promise<void> => {
    setPerPage(newPerPage);
    setPage(page);
  };

  const handleSort = (
    selectedColumn: TableColumn<any>,
    sortDirection: SortOrder
  ): void => {
    const index = columns.findIndex((col) => col.name === selectedColumn.name);
    setOrderColumn(index);
    setOrderDirection(sortDirection);
  };

  return (
    <div className="page_sec">
      {search && (
        <div className="flex justify-end items-center absolute top-0 right-0">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchText(e.target.value)
            }
            className="text-primary h-10 w-[300px] rounded-md border border-[#E2E4E9] appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-1 focus:ring-[#82B5FA]"
          />
        </div>
      )}
      <div className="data-table-wrapper mt-3 custom-datatable">
        <DataTable
          columns={columns}
          data={items}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          sortServer
          onSort={handleSort}
          defaultSortAsc={false}   
          customStyles={{
            headCells: {
              style: {
                fontSize: '13px',
                lineHeight: '18px',
                color: '#8F929C',
                fontWeight: '500',
                paddingLeft: '20px',
                justifyContent: 'start',
                backgroundColor: '#f7f7f7',
                // borderLeft: '1px solid #ddd',   
                // borderTop: '1px solid #ddd',   
              },
            },
            cells: {
              style: {
                fontSize: '13px',
                lineHeight: '18px',
                color: '#25272D',
                paddingLeft: '20px',
                // borderLeft: '1px solid #ddd',   
                
                
                
              },
            },
            rows: {
              style: {
                // border: '1px solid #ddd',  
              },
            },
            table: {
              style: {
                // borderCollapse: 'collapse', 
                // border: '1px solid #ddd',
              },
            },
          }}
        
        />
      </div>
    </div>
  );
};

export default CustomDataTable;