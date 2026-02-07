"use client";

import { useEffect } from "react";
import { useSignaturePad } from "@/src/hooks/admin/useSignaturePad";

type Props = {
  title: string;
  value: string;
  error?: string;
  onChange: (val: string) => void;
  readOnly?: boolean;
};

export default function SignatureBox({
  title,
  value,
  error,
  onChange,
  readOnly = false,
}: Props) {
  const sig = useSignaturePad(onChange);

  // 👉 Load existing signature image into canvas (VIEW MODE)
  useEffect(() => {
    if (!sig.canvasRef.current || !value) return;

    const canvas = sig.canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = value;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scale = Math.min(
        canvas.width / img.width,
        canvas.height / img.height
      );

      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      ctx.drawImage(
        img,
        x,
        y,
        img.width * scale,
        img.height * scale
      );
    };
  }, [value]);

  return (
    <div className="flex flex-col items-center gap-4 max-w-xl mx-auto w-full">
      <p className="font-medium text-center">{title}</p>

      <div className="w-full relative">
        {readOnly && (
          <span className="absolute top-2 right-2 text-xs bg-gray-100 px-2 py-0.5 rounded">
            Signed
          </span>
        )}

        <canvas
          ref={sig.canvasRef}
          className={`w-full h-[180px] border rounded-md bg-white ${
            error ? "border-red-500" : ""
          } ${readOnly ? "pointer-events-none opacity-90" : ""}`}
          style={{
            cursor: readOnly
              ? "not-allowed"
              : "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path fill='black' d='M3 21l3-1 11-11-2-2L4 18l-1 3zm14.7-14.3l-2.4-2.4 1.3-1.3c.4-.4 1-.4 1.4 0l1 1c.4.4.4 1 0 1.4l-1.3 1.3z'/></svg>\") 0 24, auto",
          }}
          onMouseDown={!readOnly ? sig.start : undefined}
          onMouseMove={!readOnly ? sig.draw : undefined}
          onMouseUp={!readOnly ? sig.stop : undefined}
          onMouseLeave={!readOnly ? sig.stop : undefined}
        />
      </div>

      {!readOnly && (
        <button
          type="button"
          onClick={sig.clear}
          className="text-sm text-red-600 hover:underline"
        >
          Clear Signature
        </button>
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
