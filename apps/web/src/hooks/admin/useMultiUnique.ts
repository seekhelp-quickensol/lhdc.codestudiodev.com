"use client";
import { useCallback, useRef, useState } from "react";

export function useMultiUnique<
  TPayload,
  TResponse extends { data?: any; isUnique?: boolean }
>(
  serviceFn: (payload: TPayload, currentId?: number) => Promise<TResponse>,
  delay = 500
)
{
  const [isUnique, setIsUnique] = useState<boolean | null>(null);
  const [nonUniqueFields, setNonUniqueFields] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const checkUnique = useCallback(
    ({ payload, currentId }: { payload: any; currentId?: number }) => {
      // Optional: skip check if payload is empty/incomplete
      if (!payload || Object.values(payload).every((v) => !v)) {
        setIsUnique(null);
        setError(null);
        setLoading(false);
        if (timerRef.current) clearTimeout(timerRef.current);
        return;
      }

      // Clear previous timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Schedule new check
      timerRef.current = setTimeout(async () => {
        setLoading(true);
        setError(null);

        try {
          const res = await serviceFn(payload, currentId);
          // More robust result handling
          const unique = res?.data?.isUnique ?? res?.isUnique ?? true;
          setIsUnique(unique);
          const notUnqiue = res?.data.data?.nonUniqueFields;
          setNonUniqueFields(  res?.data?.data?.nonUniqueFields ?? [])
        } catch (err: any) {
          setError(err?.message || "Failed to check uniqueness");
          setIsUnique(null);
        } finally {
          setLoading(false);
        }
      }, delay);
    },
    [serviceFn, delay]
  );

  return { isUnique,nonUniqueFields, loading, error, checkUnique };

}


/* Usage Example:
const { isUnique, error: uniqueError, checkUnique , nonUniqueFields } = useUniqueCheck(uniqueAdminUser, 700);

useEffect(() => {
  const payload = {
    email: email?.trim() || "",
    contact: contact?.trim() || "",
  };

  checkUnique({
    payload,
    currentId: itemID,
  });
}, [email, contact, itemID, checkUnique]);


useEffect(() => {
  clearErrors(["email", "contact"]);

  if (nonUniqueFields?.length > 0) {
    nonUniqueFields.forEach((field) => {
      setError(field as keyof AdminUserFormData, {
        type: "server",
        message: `${field
          .replace(/_/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())} is already taken`,
      });
    });
  }
}, [nonUniqueFields, setError, clearErrors]);

*/