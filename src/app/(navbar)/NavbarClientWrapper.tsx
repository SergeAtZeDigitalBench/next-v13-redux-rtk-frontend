"use client"

import React from "react"
import ReduxProvider from "../store/ReduxProvider"
import MainNavbar from "./MainNavbar"

interface IProps {
  [x: string]: unknown
}

const NavbarClientWrapper = ({}: IProps): JSX.Element => {
  return (
    <ReduxProvider>
      <MainNavbar />
    </ReduxProvider>
  )
}

export default NavbarClientWrapper
