import React from 'react'
import classnames from "classnames"

type ButtonProps = {
    children: any
    url: string
    shape: string
    colour: string
    textColour: string
    clickHandler: (event: any) => void
}
export default (props: ButtonProps) => {
    const {url, colour, textColour, shape, clickHandler} = props
    const buttonClasses = classnames(
        {[`${shape}`]: shape},
        {[`bg-${colour}-500`]: colour},
        {[`hover:bg-${colour}-800`]: colour},
        {[`text-${textColour}`]: textColour},
        "duration-300",
        "p-2",
        "py-1",
        "text-xs",
    )

    return (
        <a className={buttonClasses} href={url} role="button">
            {props.children}
        </a>
    )
}