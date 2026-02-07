import { clsx, type ClassValue } from "clsx"
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}


export const getContactIcon = (method: string) => {
  switch (method) {
    case "WhatsApp":
      return <FaWhatsapp className="text-green-600" size={18} />;
    case "Phone Call":
      return <FaPhone className="text-blue-600" size={18} />;
    case "Email":
      return <FaEnvelope className="text-purple-600" size={18} />;
    default:
      return <FaPhone className="text-gray-600" size={18} />;
  }
};