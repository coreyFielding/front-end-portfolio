import React from "react"
import Header from "../header"
import "./layout.css"
import "fontsource-open-sans"
import "fontsource-league-spartan"

export default ({ children, pageLinks }) => {
    return (
        <>
            <Header pageLinks={pageLinks}/>
            <main>{children}</main>
        </>
    )
}
