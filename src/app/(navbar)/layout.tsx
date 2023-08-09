import React from "react"
import MainNavbarClientWrapper from "./NavbarClientWrapper"

interface IProps {
  children: React.ReactNode
}

const NavLayout = ({ children }: IProps): JSX.Element => {
  return (
    <main>
      <div className="w-full h-16 bg-black">
        <MainNavbarClientWrapper />
      </div>
      {children}
    </main>
  )
}

export default NavLayout
