import React from "react"

interface IProps {
  [x: string]: unknown
}

const Homepage = ({}: IProps): JSX.Element => {
  return (
    <div className="p-5">
      <h3>Home</h3>
    </div>
  )
}

export default Homepage
