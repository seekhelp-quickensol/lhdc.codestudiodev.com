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

export default function TeamMemberList() {
  const [filteredUrl] = useState("/our-team/ajax/team-member-list");
  const { refresh } = useStateContext();

  // table name = prisma / db table
  const { toggleStatus, editItem, deleteItemAction } =
    useTableActions("tbl_our_team");

  const columns: TableColumn<any>[] = [
    {
      name: "Sr. No.",
      selector: (row) => row[0],
      width: "80px",
    },
     {
  name: "Image",
  cell: (row) =>
    row[4] ? (
      <img
        src={row[4]}
        alt="Team Member"
        className="w-20 h-28   object-cover border m-1.5"
      />
    ) : (
      <span className="text-gray-400">No Image</span>
    ),
  width: "120px",
  ignoreRowClick: true,
},


    {
      name: "Name",
      selector: (row) => row[2],
      sortable: true,
    },

    {
      name: "Designation",
      selector: (row) => row[3] || "-",
      width: "200px",
    },

   

    {
      name: "Status",
     cell: (row) => <StatusBadge isActive={row[5] === 1} />
,
      width: "120px",
    },

    {
      name: "Actions",
      cell: (row) => (
        <ActionGroup>
          <ActionButton
            variant="edit"
            onClick={() => editItem(row[1], "add-team-member")}
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
        tableName="Team Members"
        url={filteredUrl}
        columns={columns}
        refresh={refresh}
      />
    </div>
  );
}
