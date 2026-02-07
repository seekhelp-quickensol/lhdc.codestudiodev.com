"use client";

import { useState } from "react";
import { TableColumn } from "react-data-table-component";
import { FaEye, FaTrash } from "react-icons/fa";
import StatusBadge from "@/src/components/admin/StatusBadge";
import ActionGroup from "@/src/components/admin/ui/button/ActionGroup";
import ActionButton from "@/src/components/admin/ui/button/ActionButton";
import CustomDataTable from "@/src/components/admin/tables/customTableComponent";
import { useTableActions } from "@/src/hooks/admin/useTableAction";
import { useStateContext } from "@/src/context/admin/StateContext";

// simple modal component
type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default function ContactUsList() {
  const [filteredUrl] = useState("/contact-us/ajax/list");
  const { refresh } = useStateContext();
  const { toggleStatus, deleteItemAction, viewItem } = useTableActions("tbl_contact_us");

  // modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any>(null);

  const columns: TableColumn<any>[] = [
    { name: "Sr. No.", selector: (row) => row[0], width: "80px" },
    { name: "Name", selector: (row) => row[2], sortable: true },
    { name: "Email", selector: (row) => row[3] },
    { name: "Phone", selector: (row) => row[4] },
    {
      name: "Message",
      cell: (row) => {
        const msg = row[5];
        return msg.length > 50 ? msg.slice(0, 50) + "..." : msg;
      },
     width: "300px",
    },
    {
  name: "Status",
  cell: (row) => (
    <StatusBadge
      isActive={row[6] === "New"}
      activeText="New"
      inactiveText="Viewed"
    />
  ),
  
}
,

    {
      name: "Actions",
      cell: (row) => (
        <ActionGroup>
          <ActionButton
            variant="view"
            onClick={() => viewItem(row[1], setModalOpen, setModalData)}
            title="View Message"
          >
            <FaEye />
          </ActionButton>

          <ActionButton
            variant="delete"
            onClick={() => deleteItemAction(row[1])}
            title="Delete"
          >
            <FaTrash size={15} />
          </ActionButton>
        </ActionGroup>
      ),

      ignoreRowClick: true,
    },
  ];

  return (
    <>
      <div className="table-container max-w-full">
        <CustomDataTable tableName="Contact Us Messages" url={filteredUrl} columns={columns} refresh={refresh} />
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        {modalData && (
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">{modalData.name}</h2>
            <p><strong>Email:</strong> {modalData.email}</p>
            <p><strong>Phone:</strong> {modalData.phone}</p>
            <p><strong>Message:</strong></p>
            <p className="whitespace-pre-wrap">{modalData.message}</p>
          </div>
        )}
      </Modal>
    </>
  );
}
