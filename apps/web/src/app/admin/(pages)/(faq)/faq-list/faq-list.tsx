"use client";

import { useState } from "react";
import { TableColumn } from "react-data-table-component";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

import CustomDataTable from "@/src/components/admin/tables/customTableComponent";
import { useTableActions } from "@/src/hooks/admin/useTableAction";
import StatusBadge from "@/src/components/admin/StatusBadge";
import ActionGroup from "@/src/components/admin/ui/button/ActionGroup";
import ActionButton from "@/src/components/admin/ui/button/ActionButton";
import { useStateContext } from "@/src/context/admin/StateContext";

export default function FaqList() {
  const [filteredUrl] = useState("/faq/ajax/faq-list"); // <-- change URL
  const { refresh } = useStateContext();
  const { toggleStatus, editItem, deleteItemAction } = useTableActions("tbl_faq");

  const columns: TableColumn<any>[] = [
    {
      name: "Sr. No.",
      selector: (row) => row[0],
      width: "80px",
    },
    {
      name: "Question",
      cell: (row) => {
        const words = row[1]?.split(" ") || [];
        const truncated = words.length > 15
          ? words.slice(0, 15).join(" ") + "..."
          : row[1];
        return <span title={row[1]}>{truncated}</span>;
      },
      sortable: true,
    },
    {
      name: "Answer",
      cell: (row) => {
        const words = row[2]?.split(" ") || [];
        const truncated = words.length > 20
          ? words.slice(0, 20).join(" ") + "..."
          : row[2];
        return <span title={row[2]}>{truncated}</span>;
      },
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => <StatusBadge isActive={row[3] === 1} />,
      width: "120px",
    },
    {
      name: "Actions",
      cell: (row) => (
        <ActionGroup>
          <ActionButton variant="edit" onClick={() => editItem(row[4], 'add-faq')} title="Edit">
            <FaEdit size={15} />
          </ActionButton>

          <ActionButton
            variant="delete"
            onClick={() => deleteItemAction(row[4])}
            title="Delete"
          >
            <FaTrash size={15} />
          </ActionButton>

          <ActionButton
            variant="active"
            onClick={() => toggleStatus(row[4], row[3])}
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
        tableName="FAQ List"
        url={filteredUrl}
        columns={columns}
        refresh={refresh}
      />
    </div>
  );
}
