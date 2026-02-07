"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useStateContext } from "@/src/context/admin/StateContext";


import StatusPage from "../status-page";

export default function EditCategoryPage() {
  const params = useParams();
  const { setItemID } = useStateContext();

  useEffect(() => {
    if (params?.id) {
      setItemID(Number(params.id));
    }
  }, [params?.id, setItemID]);

  return <StatusPage />;
}
