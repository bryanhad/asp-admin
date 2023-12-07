import { unstable_noStore as noStore } from "next/cache"
import { prisma } from "./db/prisma"

export async function fetchPositions() {
    noStore()

    try {
        const positions = await prisma.position.findMany({
            include: {
                _count: {
                    select: { members: true },
                },
            },
        })
        return positions
    } catch (err) {
        console.error("Database Error:", err)
        throw new Error("Failed to fetch members")
    }
}

const ITEMS_PER_PAGE = 5
export async function fetchFilteredPositions(
    query: string,
    currentPage: number,
) {
    noStore()

    const offset = (currentPage - 1) * ITEMS_PER_PAGE

    try {
        const members = await prisma.position.findMany({
            skip: offset,
            take: ITEMS_PER_PAGE,
            where: {
                name: {
                    contains: query,
                    mode: "insensitive",
                },
            },
            include: {
                _count: {
                    select: { members: true },
                },
            },
        })
        return members
    } catch (err) {
        console.error("Database Error:", err)
        throw new Error("Failed to fetch members")
    }
}

export async function fetchPositionsPageAmount(query: string) {
    noStore()
    try {
        const { _all } = await prisma.position.count({
            where: {
                name: {
                    contains: query,
                    mode: "insensitive",
                },
            },
            select: {
                _all: true,
            },
        })
        const totalPages = Math.ceil(Number(_all) / ITEMS_PER_PAGE)
        return totalPages
    } catch (error) {
        console.error("Database Error:", error)
        throw new Error("Failed to fetch total number of Members.")
    }
}
