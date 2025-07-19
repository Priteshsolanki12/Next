'use client'
//import { usePathname } from "next/navigation";
import Link from "next/link";
import './Navbar.css'



function Navbar() {
  return (
    <div className="Navbar">
        <Link className="nav" href="/" >Home</Link>
        <Link className="nav" href="/About" >About</Link>
        <Link className="nav" href="/Flight" >Flight</Link>
    </div>
  )
}

export default Navbar