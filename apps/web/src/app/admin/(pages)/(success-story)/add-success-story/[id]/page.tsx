"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useStateContext } from "@/src/context/admin/StateContext";
import AddSuccessStoryForm from "../add-success-story";


export default function EditSuccessStoryPage() {
  const params = useParams();
  const { setItemID } = useStateContext();

  useEffect(() => {
    if (params?.id) {
      setItemID(Number(params.id));
    }
  }, [params?.id, setItemID]);

  return <AddSuccessStoryForm />;
}
