"use client";

import { useState } from "react";
import { TableColumn } from "react-data-table-component";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

import CustomDataTable from "@/src/components/admin/tables/customTableComponent";
import StatusBadge from "@/src/components/admin/StatusBadge";
import ActionGroup from "@/src/components/admin/ui/button/ActionGroup";
import ActionButton from "@/src/components/admin/ui/button/ActionButton";
import { useStateContext } from "@/src/context/admin/StateContext";
import { useTableActions } from "@/src/hooks/admin/useTableAction";




export default function UserList() {
  const { refresh } = useStateContext();
  const { deleteItemAction, editItem } = useTableActions("tbl_users"); 

  /* =========================
     STATIC DATA (Sample Response)
  ========================== */
const userSampleResponse = {
  recordsFiltered: 4,
  data: [
    {
      id: 1,
      sr_no: "1",
      full_name: "Rahul Sharma",
      contact_no: "9876543210",
      email: "rahul.sharma@gmail.com",
      address: "Flat 302, Shree Residency, Andheri East, Mumbai, Maharashtra",
      status: 1,
    },
    {
      id: 2,
      sr_no: "2",
      full_name: "Priya Verma",
      contact_no: "8877665544",
      email: "priya.verma@yahoo.com",
      address: "B-12, Laxmi Nagar, Near Metro Station, Delhi",
      status: 0,
    },
    {
      id: 3,
      sr_no: "3",
      full_name: "Amit Patil",
      contact_no: "7766554433",
      email: "amit.patil@outlook.com",
      address: "Row House 5, Sinhagad Road, Pune, Maharashtra",
      status: 1,
    },
    {
      id: 4,
      sr_no: "4",
      full_name: "Neha Iyer",
      contact_no: "9900112233",
      email: "neha.iyer@rediffmail.com",
      address: "No. 21, 3rd Cross, Indiranagar, Bengaluru, Karnataka",
      status: 1,
    },
  ],
};


  const columns: TableColumn<any>[] = [
    {
      name: "Sr. No.",
      selector: (row) => row.sr_no,
      width: "100px",
    },
    {
      name: "Full Name",
      selector: (row) => row.full_name,
      sortable: true,
    },
    {
      name: "Contact No",
      selector: (row) => row.contact_no,
      width: "180px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    // {
    //   name: "Status",
    //   cell: (row) => <StatusBadge isActive={row.status === 1} />,
    //   width: "120px",
    // },
    {
      name: "Actions",
      cell: (row) => (
        <ActionGroup>
          <ActionButton
            variant="edit"
            onClick={() => console.log("Edit ID:", row.id)}
            title="Edit"
          >
            <FaEdit size={15} />
          </ActionButton>

          <ActionButton
  variant="delete"
  onClick={() => deleteItemAction(row.id)}
  title="Delete"
>
  <FaTrash size={15} />
</ActionButton>


          {/* <ActionButton
            variant="active"
            onClick={() => console.log("Toggle Status for ID:", row.id)}
            title="Toggle Status"
          >
            {row.status === 1 ? <AiOutlineCheck /> : <AiOutlineClose />}
          </ActionButton> */}
        </ActionGroup>
      ),
      width: "200px",
      ignoreRowClick: true,
    },
  ];

  return (
    <div className="table-container max-w-full">
      <CustomDataTable
        tableName="User List"
        url="" // Empty URL because we are in demo mode
        columns={columns}
        refresh={refresh}
        demoMode={true} // Enabled Demo Mode
        sampleResponse={userSampleResponse} // Passed static data here
        search={true}
      />
    </div>
  );
}