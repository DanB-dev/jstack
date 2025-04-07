import React from "react"
import NavBar from "@/app/components/navbar"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default Layout
