import React from "react"
import { Link } from "gatsby"

// Styles
// Background
const backgroundDotStyles = {
  "z-index": "-1",
  "width": "73.4375rem",
}

const backgroundDotItemStyles = {
  "bottom": "-21.7rem",
  "right": "-29.325rem",
  "width": "73.4375rem",
  "height": "73.4375rem",
  "background": "radial-gradient(50% 50% at 50% 50%,#F9A8D4 0,hsla(0,0%,100%,0) 100%)"
}

export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <div className="fixed -inset-y-0 right-0 overflow-hidden" style={backgroundDotStyles}>
        <div className="absolute" style={backgroundDotItemStyles}></div>
      </div>
      <header className="w-full fixed top-0">
        <div className="container flex flex-row justify-between items-center py-10">
          <div>
            <Link to="/" className="capitalize text-xl">steff yang</Link>
          </div>
          <div>
            <Link className="tracking-wide text-gray-700 border-b-0 hover:border-b-2 hover:border-pink-600 active:border-b-2 active:border-pink-600 px-0 py-1 font-medium uppercase" to="/about/">about</Link>
          </div>
        </div>
      </header>
      <div className="py-40">
        {children}
      </div>
      <footer className="w-full">
        <div className="container flex flex-row justify-between items-center py-10">
          <div>
            <p className="text-md uppercase">©2020 steff yang | fun and mental are fundamental.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}