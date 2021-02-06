import React, {useState} from 'react'
import classnames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import setupIconLibrary from "../../utils/setup-icon-library"
import Button from "./index";
setupIconLibrary()

type ButtonProps = {
    children: any
    url: string
    shape: string
    colour: string
    text_colour: string
    icon: string
    clickHandler: (event: any) => void
}
export default (
    {
        url,
        shape,
        icon,
        colour,
        text_colour,
        children
    }: ButtonProps) => {

    console.log(url, shape, colour, text_colour)


    const [hover, setHover] = useState(false)

    const buttonClasses = classnames(
        {[`${shape}`]: shape},
        {[`${text_colour}`]: text_colour},
        "border-2",
        "border-indigo-400",
        "hover:shadow-md",
        "hover:bg-indigo-400",
        "hover:text-white",
        "duration-300",
        "p-2",
        "py-1",
        "text-xs",
    )

    return (
        <a className={buttonClasses} href={url} role="button" onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
            <span style={{mixBlendMode: 'lighten'}}>
                {children}
                {hover ? <FontAwesomeIcon icon={['fas', icon as any]} className="ml-2"/> : null}
            </span>
        </a>
    )
}