import React from "react"
import Header from "../header"
import "./layout.css"


export default ({ children }) => {
    console.log(children)
    return (
        <div>
            <Header/>
            <main>{children}</main>
        </div>
    )
}
