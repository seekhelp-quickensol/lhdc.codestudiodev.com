"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useStateContext } from "@/src/context/admin/StateContext";
import FaqList from "../../faq-list/faq-list";
import AddFaqForm from "../add-faq";
// import PressReleaseList from "../../press-release-list/press-release-list";
export default function EditCategoryPage() {
  const params = useParams();
  const { setItemID } = useStateContext();
  useEffect(() => {
    if (params?.id) {
      setItemID(Number(params.id));
    }
  }, [params?.id, setItemID]);
  return <AddFaqForm />;
}
 