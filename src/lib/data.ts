import { unstable_noStore as noStore } from "next/cache"
import { prisma } from "./db/prisma"

const ITEMS_PER_PAGE = 6
export async function fetchFilteredPositions(
    query: string,
    currentPage: number,
) {
    noStore()

    const offset = (currentPage - 1) * ITEMS_PER_PAGE

    try {
        const positions = await prisma.position.findMany({
            skip: offset,
            take: ITEMS_PER_PAGE,
            where: {
                name: {
                    contains: query,
                    mode: "insensitive",
                },
            },
            orderBy: { id: "desc" },
            include: {
                _count: {
                    select: { members: true },
                },
            },
        })
        return positions
    } catch (err) {
        console.error("Database Error:", err)
        throw new Error("Failed to fetch positions")
    }
}

export async function fetchFilteredMembers(query: string, currentPage: number) {
    noStore()

    const offset = (currentPage - 1) * ITEMS_PER_PAGE

    try {
        const members = await prisma.member.findMany({
            skip: offset,
            take: ITEMS_PER_PAGE,
            where: {
                name: {
                    contains: query,
                    mode: "insensitive",
                },
            },
            orderBy: { id: "desc" },
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
        throw new Error("Failed to fetch total pages number of Positions.")
    }
}

export async function fetchMembersPageAmount(query: string) {
    noStore()
    try {
        const { _all } = await prisma.member.count({
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
        throw new Error("Failed to fetch total pages amount of Members.")
    }
}

export async function fetchMemberDataAndPositions(memberId: string) {
    noStore()
    try {
        const [memberData, positions] = await Promise.all([
            prisma.member.findUnique({
                where: { id: memberId },
            }),
            prisma.position.findMany(),
        ])
        return [memberData, positions] as const
    } catch (err) {
        console.error("Database Error:", err)
        throw new Error("Failed to fetch Member.")
    }
}
