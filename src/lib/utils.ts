import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumberWithDot(number: number): string {
 // Convert the number to a string and split into integer and decimal parts
 let [integerPart, decimalPart] = number.toFixed(3).split('.');

 // Add commas for thousands separator
 integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

 // Concatenate integer and decimal parts
 let formattedNumber: string = `${integerPart}`;

 return formattedNumber;
}