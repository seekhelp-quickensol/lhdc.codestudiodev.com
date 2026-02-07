"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useStateContext } from "@/src/context/admin/StateContext";
// import PressReleaseList from "../../press-release-list/press-release-list";

import AddTeamMemberForm from "../add-team-member";
export default function EditCategoryPage() {
  const params = useParams();
  const { setItemID } = useStateContext();
  useEffect(() => {
    if (params?.id) {
      setItemID(Number(params.id));
    }
  }, [params?.id, setItemID]);
  return <AddTeamMemberForm />;
}
 