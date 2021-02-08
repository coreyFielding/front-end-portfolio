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
    style: string
    hover_effect: string
    size: string
    colour: string
    text_colour: string
    icon: string
    clickHandler: (event: any) => void
}
export default (
    {
        url,
        shape,
        style,
        hover_effect,
        size,
        icon,
        colour,
        text_colour,
        children
    }: ButtonProps) => {

    const [hover, setHover] = useState(false)

    const buttonClasses = classnames(
        {[`${shape}`]: shape},
        {[`${text_colour}`]: text_colour},
        {[`${size}`]: size},
        {[`${style === 'filled' ? `${colour}` : 'ring-2'}`]: style},
        {[`${hover_effect?.includes('fill') ? `hover:${colour}` : ''}`]: hover_effect},
        {[`${hover_effect?.includes('outline') ? `hover:ring-2` : ''}`]: hover_effect},
        {[`${hover_effect?.includes('shadow') ? 'hover:shadow-lg' : ''}`]: hover_effect},
        {[`${hover_effect?.includes('rise') ? 'hover:-translate-y-1' : ''}`]: hover_effect},
        `hover:${text_colour === 'light' ? 'text-black' : 'text-white'}`,
        "duration-300",
        "p-2",
        "py-1",
        "text-sm",
        "ring-indigo-400"
    )

    return (
        <a className={buttonClasses} href={url} role="button" onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
            <span style={{mixBlendMode: 'lighten'}}>
                {children}
                {hover && icon ? <FontAwesomeIcon icon={['fas', icon as any]} className="ml-2"/> : null}
            </span>
        </a>
    )
}