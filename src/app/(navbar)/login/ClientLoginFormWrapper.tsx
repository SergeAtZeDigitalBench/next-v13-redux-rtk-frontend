"use client"

import ReduxProvider from "@/app/store/ReduxProvider"
import LoginForm from "./LoginForm"

interface IProps {
  [x: string]: unknown
}

const ClientLoginFormWrapper = ({}: IProps): JSX.Element => {
  return (
    <ReduxProvider>
      <LoginForm />
    </ReduxProvider>
  )
}

export default ClientLoginFormWrapper
