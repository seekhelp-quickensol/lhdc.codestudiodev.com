'use client';

 
import { useEffect, useState } from 'react';
 
import SideDrawer from '@/src/components/admin/SideDrawer';
import ComponentCard from '@/src/components/admin/common/ComponentCard';
import { Plus } from 'lucide-react';
import DesignaitonList from './designation-list';
import AddDesignationForm from './add-designation';
import Button from '@/src/components/admin/ui/button/Button';
import { useStateContext } from '@/src/context/admin/StateContext';
 
 

export default function DesignationsPage() {
  const { isDrawerOpen, setIsDrawerOpen, itemID , setItemID } = useStateContext();
  useEffect(() => {
    if (itemID && itemID !== undefined) {
      setIsDrawerOpen(true);
    } else {
      setIsDrawerOpen(false);
    }
  }, [itemID]);
 


  return (
    <>
     <ComponentCard title="Designation Master" desc='Designation Master provides a centralized space to create, manage, and update employee role titles, ensuring consistency and clarity across the organization.'>
          <Button variant={"primary"} onClick={() => setIsDrawerOpen(true)}>
          <Plus />
            Add Designation
          </Button>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <div>
            <DesignaitonList/>
          </div>
        </div>
      
      </ComponentCard>
      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false)
          if (itemID !== undefined) {
            setItemID(undefined);
          }

        }}
        title="Add Designation"
         width="xxl"
      >
        <AddDesignationForm />
      
      </SideDrawer>
    </>
  );
}