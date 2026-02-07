"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { activateItem, deactivateItem, deleteItem } from "@/src/services/admin/services";
import toast from "react-hot-toast";
import { useStateContext } from "@/src/context/admin/StateContext";

import {  getContactById,  updateContactStatus,} from "@/src/services/admin/services";



interface ApiResponse {
    data: {
        success: boolean;
        message: string;
    };
}

export const useTableActions = (tableName: string) => {
  const router = useRouter();
  const { setRefresh , refresh } = useStateContext();
  const { itemID, setItemID } = useStateContext();

  const toggleStatus = async (id: number, currentStatus: string | number) => {
    try {
      let response: ApiResponse;
      if (currentStatus === 1) {
        response = await deactivateItem(tableName, id);
      } else {
        response = await activateItem(tableName, id);
      }

      if (response.data.success) {
        toast.success("Status updated successfully!");
        setRefresh(!refresh);
      } else {
        toast.error("Failed to toggle status");
        console.error("Failed to toggle status:", response.data.message);
      }
      // Swal.fire({
      //   // title: "Status updated successfully!",
      //   text: "Status updated successfully!",
      //   icon: "success",
        
      // });
    } catch (error) {
      toast.error("Error toggling status");
      console.error("Error toggling status:", error);

    }
  };

  const editItem = (id: number, path: string) => {
    // alert(`http://localhost:3001/admin/${path}/${id}`);
    // router.push(`http://localhost:3001/admin/${path}/${id}`);
    router.push(`/admin/${path}/${id}`);
    // setItemID(id);
    // 
   
  };

  const deleteItemAction = async (id: number) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "This action will permanently delete the item.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        const response: ApiResponse = await deleteItem(tableName, id);
        if (response.data.success) {
          toast.success("Item deleted successfully");
          setRefresh(!refresh);
         
        } else {
          toast.error("Failed to delete item");
        }
      }
    } catch (error) {
      toast.error("Error deleting item");
      console.error("Error deleting item:", error);

    }
  };

   // NEW: view item
  const viewItem = async (
    id: number,
    setModalOpen: (val: boolean) => void,
    setModalData: (val: any) => void
  ) => {
    try {
      const res = await getContactById(id);
      if (res.data.success) {
        setModalData(res.data.data);
        setModalOpen(true);

        // mark as viewed / resolved
        if (res.data.data.status === 1) {


          await updateContactStatus(id, 0); // mark as Viewed

          setRefresh(!refresh);
        }
      } else {
        toast.error("Failed to fetch message details");
      }
    } catch (error) {
      toast.error("Error fetching message details");
      console.error(error);
    }
  };

  return { toggleStatus, editItem, deleteItemAction, viewItem};
};
