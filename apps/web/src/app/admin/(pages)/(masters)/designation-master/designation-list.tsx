"use client";

import { useState } from "react";
import { TableColumn } from "react-data-table-component";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

import CustomDataTable from "@/src/components/admin/tables/customTableComponent";
import { useTableActions } from "@/src/hooks/admin/useTableAction";
import { useStateContext } from "@/src/context/admin/StateContext";

import StatusBadge from "@/src/components/admin/StatusBadge";
import ActionGroup from "@/src/components/admin/ui/button/ActionGroup";
import ActionButton from "@/src/components/admin/ui/button/ActionButton";

/* =========================
   Designation Row Type
========================= */
export type DesignationRow = [
  number, // Sr No
  number, // ID
  string, // Designation Name
  number  // Status
];

export default function DesignationList() {
  const [filteredUrl] = useState(
    "/designation/ajax/designation-list"
  );

  const { refresh } = useStateContext();

  const { toggleStatus, editItem, deleteItemAction } =
    useTableActions("tbl_designation_master");

  const columns: TableColumn<DesignationRow>[] = [
    {
      name: "Sr. No.",
      selector: (row) => row[0],
      width: "80px",
    },
    {
      name: "Designation Name",
      selector: (row) =>
        row[2]?.toLowerCase() === "unknown" ? "-" : row[2],
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => <StatusBadge isActive={row[3] === 1} />,
      width: "150px",
    },
    {
      name: "Actions",
      cell: (row) => (
        <ActionGroup>
          <ActionButton
            variant="edit"
            onClick={() => editItem(row[1], "designation-master")}
            title="Edit"
          >
            <FaEdit size={15} />
          </ActionButton>

          <ActionButton
            variant="delete"
            onClick={() => deleteItemAction(row[1])}
            title="Delete"
          >
            <FaTrash size={15} />
          </ActionButton>

          <ActionButton
            variant="active"
            onClick={() => toggleStatus(row[1], row[3])}
            title="Toggle Status"
          >
            {row[3] === 1 ? <AiOutlineCheck /> : <AiOutlineClose />}
          </ActionButton>
        </ActionGroup>
      ),
      width: "200px",
      ignoreRowClick: true,
    },
  ];

  return (
    <div className="table-container max-w-full">
      <CustomDataTable
        tableName="Designation Master"
        url={filteredUrl}
        columns={columns}
        refresh={refresh}
      />
    </div>
  );
}
