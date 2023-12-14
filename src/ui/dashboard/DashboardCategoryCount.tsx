import { prisma } from '@/lib/db/prisma'
import React from 'react'
import { CategoryMap } from '../cards/DashboardCard'


export default async function DashboardCategoryCount({category}:{category:keyof CategoryMap}) {
    // @ts-ignore
    const count = await prisma[category].count() // let's just... let this one slide lol :D

  return (
    <span>{count}</span>
  )
}
