"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

interface UseFetchByIdProps<T> {
  fetchService: (id: number) => Promise<T>;
  setFormData: (data: Partial<T>) => void;
  onError?: (error: string) => void;
  onSuccess?: () => void;
}

export function useFetchById<T>({
  fetchService,
  setFormData,
  onError,
  onSuccess
}: UseFetchByIdProps<T>) {
  const params = useParams();
  const itemID = params?.id as unknown as number | undefined; 

  useEffect(() => {
    if (!itemID) return;

    const fetchData = async () => {
      try {
        const data = await fetchService(itemID);
        setFormData(data);
        onSuccess?.();
      } catch (error: any) {
        onError?.(error.message || "Failed to fetch data");
      }
    };

    fetchData();
  }, [itemID]); // 👈 Only re-run if the `itemID` changes

  return { itemID };
}
