'use client'

import { useSession } from "next-auth/react"

export default function UserClient() {
    const session = useSession()
  return (
    <div>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}
