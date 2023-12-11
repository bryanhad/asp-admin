import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatNumberWithDot(number: number): string {
    // Convert the number to a string and split into integer and decimal parts
    let [integerPart, decimalPart] = number.toFixed(3).split(".")

    // Add commas for thousands separator
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".")

    // Concatenate integer and decimal parts
    let formattedNumber: string = `${integerPart}`

    return formattedNumber
}

export function generatePagination(currentPage: number, totalPages: number) {
    // If the total number of pages is 4 or less,
    // display all pages without any ellipsis.
    if (totalPages <= 4) {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    // If the current page is among the first 3 pages,
    // show the first 3, an ellipsis, and the last 2 pages.
    if (currentPage <= 3) {
        return [1, 2, 3, "...", totalPages - 1, totalPages]
    }

    // If the current page is among the last 3 pages,
    // show the first 2, an ellipsis, and the last 3 pages.
    if (currentPage >= totalPages - 2) {
        return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages]
    }

    // If the current page is somewhere in the middle,
    // show the first page, an ellipsis, the current page and its neighbors,
    // another ellipsis, and the last page.
    return [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
    ]
}

export function getPrismaError(err: PrismaClientKnownRequestError) {
    if (err.name === "PrismaClientKnownRequestError") {
        switch (err.code) {
            case "P2002":
                return "Input must be unique. Please choose a different one."
            case "P2014":
                return "Cannot delete the record. Linked data exists."
            default:
                return `PrismaClientKnownRequestError. CODE: ${err.code}`
        }
    }
}

export function isNonEmptyArray(arr: any[]): arr is Array<string | number> {
    return arr.length > 0
}
