"use client";

import { useState } from "react";
import { TableColumn } from "react-data-table-component";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

import CustomDataTable from "@/src/components/admin/tables/customTableComponent";
import { useTableActions } from "@/src/hooks/admin/useTableAction";
import StatusBadge from "@/src/components/admin/StatusBadge";
import ActionGroup from "@/src/components/admin/ui/button/ActionGroup";
import ActionButton from "@/src/components/admin/ui/button/ActionButton";
import { useStateContext } from "@/src/context/admin/StateContext";

export default function SuccessStoryList() {
  const [filteredUrl] = useState("/success-story/ajax/success-story-list");
  const { refresh } = useStateContext();
  const { toggleStatus, editItem, deleteItemAction } = useTableActions("tbl_success_story");

  const columns: TableColumn<any>[] = [
    {
      name: "Sr. No.",
      selector: (row) => row[0],
      width: "80px",
    },
      {
      name: "Image",
      cell: (row) =>
        row[5] ? (
          <div className="relative group">
            <img src={row[5]} alt={row[2]} className="w-20 h-20 object-cover rounded border m-1" />
            <a
              href={row[5]}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center"
            >
              <FaEye className="text-white" />
            </a>
          </div>
        ) : (
          <span className="text-gray-400 text-sm">No Image</span>
        ),
      width: "160px",
    },
    {
      name: "Name",
      selector: (row) => row[2],
      sortable: true,
    },

    {
      name: "Organization",
      selector: (row) => row[3] || "-",
      width: "180px",
    },

    {
      name: "Content",
      selector: (row) => row[4],
      cell: (row) => {
        const text = row[4] || "";
        const truncated = text.length > 50 ? text.slice(0, 50) + "..." : text;
        return <span title={text}>{truncated}</span>;
      },
      sortable: true,
      width: "300px",
    },

  

    {
      name: "Status",
      cell: (row) => <StatusBadge isActive={row[6] === 1} />,
      width: "120px",
    },

    {
      name: "Actions",
      cell: (row) => (
        <ActionGroup>
          <ActionButton
            variant="edit"
            onClick={() => editItem(row[1], "add-success-story")}
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
            onClick={() => toggleStatus(row[1], row[6])}
            title="Toggle Status"
          >
            {row[6] === 1 ? <AiOutlineCheck /> : <AiOutlineClose />}
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
        tableName="Success Stories"
        url={filteredUrl}
        columns={columns}
        refresh={refresh}
      />
    </div>
  );
}
