
"use client";
import React, { createContext, useContext, useState } from "react";

interface StateContextType {
    isDrawerOpen: boolean;
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    refresh: boolean;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
    itemID: number | undefined;
    setItemID: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const StateContext = createContext<StateContextType | undefined>(undefined);


export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [refresh, setRefresh] = useState<boolean>(false);
    const [itemID, setItemID] = useState<number | undefined>(undefined);

    
    return (
        <StateContext.Provider value={{ isDrawerOpen, setIsDrawerOpen, refresh, setRefresh, itemID , setItemID }}>
            {children}
        </StateContext.Provider>
    );
};


export const useStateContext = (): StateContextType => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error("useStateContext must be used within a StateProvider");
    }
    return context;
};