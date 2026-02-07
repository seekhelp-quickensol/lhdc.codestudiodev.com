


"use client";



import ComponentCard from "@/src/components/admin/common/ComponentCard";

import { useStateContext } from "@/src/context/admin/StateContext";
import ContactUsList from "./contact-us-list";



export default function PressRelease() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6">
      
    <ComponentCard
  title=" Contact us List"
  desc="View, Messeges"
>


         <ContactUsList/>
        </ComponentCard>
     
    </div>
  );
}
