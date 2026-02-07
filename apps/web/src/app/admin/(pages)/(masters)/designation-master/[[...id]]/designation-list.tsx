"use client";
import { useEffect, useState } from "react";
import { TableColumn } from "react-data-table-component";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import CustomDataTable from "@/src/components/admin/tables/customTableComponent";
import { DesignationRow } from "@/src/types/admin/types";
import { useTableActions } from "@/src/hooks/admin/useTableAction";

import StatusBadge from "@/src/components/admin/StatusBadge";
import ActionButton from "@/src/components/admin/ui/button/ActionButton";
import ActionGroup from "@/src/components/admin/ui/button/ActionGroup";
import { useStateContext } from "@/src/context/admin/StateContext";

export default function DesignaitonList(){

    const [filteredUrl, setFilteredUrl] = useState(
      "/designation/ajax/designation-list"
    );
    const { refresh } = useStateContext();

    const { toggleStatus, editItem, deleteItemAction } =
      useTableActions("tbl_designation_master");
  
    const columns: TableColumn<DesignationRow>[] = [
      { name: "Sr. No.", selector: (row) => row[0], width: "80px" },
      {
        name: "Designaiton",
        selector: (row) => (row[2]?.toLowerCase() === "unknown" ? "-" : row[2]),
      },
      {
        name: "Status",
        cell: (row) => (<StatusBadge isActive={row[3] === 1} />),
        width: "200px",
      },
      {
        name: "Actions",
        cell: (row) => (
          <ActionGroup>
            <ActionButton
            variant="edit"
              onClick={() => editItem(row[1], "/designation-master")}
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
              onClick={() => toggleStatus(row[1], row[3])}
                variant="active"
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
            tableName="Designaiton Master"
            url={filteredUrl}
            columns={columns}
            refresh={refresh}
            
          />
        </div>
     
    );
  };
  

 
