import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeLink(link: string): string {
  // Remove any leading or trailing slashes
  link = link.replace(/^\/+|\/+$/g, "");
  
  // Remove any query parameters or fragments
  link = link.split("?")[0].split("#")[0];
  
  // Replace spaces with hyphens
  link = link.replace(/\s+/g, "");
  
  // Convert to lowercase
  return link.toLowerCase();
}