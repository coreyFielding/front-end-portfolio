import React from 'react'
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
        icon,
        children
    }: ButtonProps) => {

    const buttonClasses = classnames(
        {[`${shape}`]: shape},
        {[`${colour}`]: colour},
        "text-cararra-50",
        "hover:bg-azure-500",
        "hover:shadow-md",
        "transform",
        "hover:-translate-y-1",
        "duration-300",
        "p-2",
        "py-1",
        "text-xs",
    )

    return (
        <a className={buttonClasses} href={url} role="button">
            <span>
                {children}
                <FontAwesomeIcon icon={['fas', icon as any]} />
            </span>
        </a>
    )
}