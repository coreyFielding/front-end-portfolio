import React, {useState} from 'react'
import classnames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import setupIconLibrary from "../../utils/setup-icon-library"
setupIconLibrary()

type ButtonProps = {
    children: any
    url: string
    shape: string
    colour: string
    icon: string
    clickHandler: (event: any) => void
}
export default (
    {
        url,
        shape,
        colour,
        children
    }: ButtonProps) => {


    const [hover, setHover] = useState(false)

    const buttonClasses = classnames(
        {[`${shape}`]: shape},
        "bg-indigo-400",
        "text-cararra-50",
        "hover:shadow-md",
        "hover:bg-white",
        "duration-300",
        "p-2",
        "py-1",
        "text-xs",
    )

    return (
        <a className={buttonClasses} href={url} role="button" onMouseEnter={() => setHover(!hover)}>
            <span>
                {children}
            </span>
        </a>
    )
}