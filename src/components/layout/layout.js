import React from "react"
import Header from "../header"
import "./layout.css"


export default ({ children }) => {
    return (
        <div>
            <Header/>
            <main>{children}</main>
        </div>
    )
}
