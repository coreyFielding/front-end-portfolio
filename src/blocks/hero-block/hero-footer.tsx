import React from 'react'
import Button from '../../components/button';
import classnames from 'classnames'

const WorkStatus = ({status}) => {
    const statusClasses = classnames(
        "bg-green-500",
        "bg-opacity-30",
        "rounded-full",
        "text-green-300",
        "p-1",
        "px-2",
        "text-xs",
        "w-auto",
        "flex",
    )

    return (
        <div className={statusClasses}>
            <span className="w-2 h-2 bg-lime-400 rounded-full inline-block m-1 mt-2" />
            <p>{status.text}</p>
        </div>
    )
}

const HeroScroll = ({text, url, icon}) => {
    return (
        <Button url={url} icon={icon} textColour={'black'}>{text}</Button>
    )
}

const HeroContact = (props) => {
    return (
        <Button {...props}>
            {props.text}
        </Button>
    )
}

export default ({status, heroScroll, heroContact}) => {
    const heroFooterClasses = classnames(
        "absolute",
        "bottom-0",
        "left-0",
        "flex",
        "justify-between",
        "p-2",
        "w-full",
        "h-12",
    )

    return (
        <div className={heroFooterClasses}>
            <WorkStatus status={status}/>
            <HeroScroll {...heroScroll}/>
            <HeroContact {...heroContact}/>
        </div>
    )
}