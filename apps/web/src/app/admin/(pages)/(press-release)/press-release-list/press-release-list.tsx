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

export default function PressReleaseList() {
  const [filteredUrl] = useState("/press-release/ajax/press-release-list"); // <-- change URL
  const { refresh } = useStateContext();
  const { toggleStatus, editItem, deleteItemAction } = useTableActions("tbl_press_release");

  const columns: TableColumn<any>[] = [
    {
      name: "Sr. No.",
      selector: (row) => row[0],
      width: "80px",
    },
    
   {
  name: "Image",
  cell: (row) =>
    row[3] ? (
      <div className="relative group">
        <img src={row[3]} alt={row[2]} className="w-28 h-16 object-cover rounded border m-1" />
        <a href={row[3]} target="_blank" rel="noopener noreferrer"
           className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
          <FaEye className="text-white" />
        </a>
      </div>
    ) : <span className="text-gray-400 text-sm">No Image</span>,
  width: "160px",
},

{
      name: "Title",
      cell: (row) => {
        const words = row[2]?.split(" ") || [];
        const truncated = words.length > 10
          ? words.slice(0, 10).join(" ") + "..."
          : row[2];
        return <span title={row[2]}>{truncated}</span>;
      },
      sortable: true,
    },
{
  name: "Author",
  selector: (row) => row[4] || "-",
  width: "180px",
},
{
  name: "Status",
  cell: (row) => <StatusBadge isActive={row[5] === 1} />,
  width: "120px",
},
// {
//   name: "View",
//   cell: (row) => (
//     <ActionButton title="Preview Press Release"
//       onClick={() => window.open(`/press-release/${row[6]}?preview=admin`, "_blank")}>
//       <FaEye size={15} />
//     </ActionButton>
//   ),
//   width: "100px",
//   ignoreRowClick: true,
// },

    {
      name: "Actions",
      cell: (row) => (
        <ActionGroup>
          <ActionButton variant="edit" onClick={() => editItem(row[1], 'add-press-release')} title="Edit">
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
            onClick={() => toggleStatus(row[1], row[5])}
            title="Toggle Status"
          >
            {row[5] === 1 ? <AiOutlineCheck /> : <AiOutlineClose />}
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
        tableName="Press Releases"
        url={filteredUrl}
        columns={columns}
        refresh={refresh}
      />
    </div>
  );
}
