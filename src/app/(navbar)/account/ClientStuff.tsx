"use client"

import React, { useEffect, useState } from "react"
import { store, useAppSelector } from "@/app/store"

interface IProps {
  [x: string]: unknown
}

const ClientStuff = ({}: IProps): JSX.Element => {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState("")
  const jid = store.getState().auth.jid

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3002/user/profile", {
          headers: { Authorization: `Bearer ${jid}` },
          mode: "cors",
        })
        const data = await res.json()
        setUsername(data.sub)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [jid])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h3 className="font-bold text-4xl">Welcome {username}!</h3>
    </div>
  )
}

export default ClientStuff
