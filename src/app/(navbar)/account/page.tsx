import React from "react"

import ClientStuff from "./ClientStuff"

interface IProps {
  [x: string]: unknown
}

const AccountPage = ({}: IProps): JSX.Element => {
  return (
    <div className="p-5">
      <ClientStuff />
    </div>
  )
}

export default AccountPage
