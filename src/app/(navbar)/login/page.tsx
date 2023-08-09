import React from "react"

import ClientLoginFormWrapper from "./ClientLoginFormWrapper"

interface IProps {
  [x: string]: unknown
}

const LoginPage = ({}: IProps): JSX.Element => {
  return (
    <div className="h-screen w-full flex">
      <div className="m-auto">
        <h1 className="font-bold text-3xl">Login</h1>
        <br />
        <ClientLoginFormWrapper />
      </div>
    </div>
  )
}

export default LoginPage
