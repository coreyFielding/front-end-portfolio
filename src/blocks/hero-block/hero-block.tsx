import React, {useEffect, useState} from "react"
import { IHeroBlockProps, IHeroColumnProps } from "./types";
import { columnCardClasses, heroScrollClasses, socialLinkClasses, statusClasses, heroImageClasses } from './classes'
import './styles.css'
import Button from '../../components/button'
import Image from '../../components/Image'
import classnames from 'classnames'
import FadeScroll from '../../components/animation/fadeScroll/fade-scroll'
import FadeMount from '../../components/animation/fadeMount/fade-mount'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import setupIconLibrary from "../../utils/setup-icon-library"
setupIconLibrary()

const HeroTitle = ({text, size, weight, colour}) => (
        <h1 className={`text-lg text-left sm:text-center sm:${size} ${colour} mt-0 ${weight}`} style={{fontFamily: 'League Spartan'}}>{text}</h1>
)

const HeroSubtitle = ({text, colour, size}) => (
    <div>
        <h3 className={`${size} ${colour} text-left sm:text-center`}>{text}</h3>
    </div>
)

const HeroBody = (props) => {
    const {body} = props

    return (
            body ? (<span className="text-white">{body}</span>) : null
    )
}

const HeroText = ({title, subtitle, body}) => {
    const heroTextClasses = classnames(
        "mx-3",
        "sm:mx-0",
        "sm:col-start-1",
        "sm:col-end-4",
        "row-start-3",
        "z-10",
    )
    return (
        <FadeMount delay={800} classes={heroTextClasses} float={true}>
            <HeroTitle {...title} />
            <HeroSubtitle {...subtitle} />
        </FadeMount>
    )
}

const HeroQuickLinks = ({links}) => {
    const quicklinkClasses = classnames(
        "row-start-5",
        "sm:col-start-1",
        "sm:col-end-4",
        "sm:row-start-6",
        "z-10",
    )
    return (
        links.map((link, index) => (
            <FadeMount classes={quicklinkClasses} delay={800} float={true}>
                <Button key={index} {...link}>
                    {link.text}
                    <FontAwesomeIcon icon={['fas', link.icon as any]} className="ml-2"/>
                </Button>
            </FadeMount>
        ))
        )

}

const HeroSocials = ({links}) => (
    <div className={socialLinkClasses}>
        {
            links.map((link, index) => (
                <FadeMount classes={socialLinkClasses} delay={1000 * (index + 1)}>
                    <a href={link.url} className={`hover:text-${link.hoverColour}`}>
                        <FontAwesomeIcon icon={['fab', link.icon as any]} />
                    </a>
                </FadeMount>
            ))
        }
    </div>
)

const HeroScroll = ({url, effect, ref}) => {
    const smoothScroll = (ref) => {
        //ref.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        effect === 'mouse' ? (
            <a id="scroll" onClick={() => smoothScroll(ref)} href={url} className={heroScrollClasses}><span></span></a>
        ) : null
    )
}

const WorkStatus = ({status}) => (
    <div className={statusClasses}>
        <span className="w-2 h-2 bg-lime-400 rounded-full m-1 mt-2"/>
        <p>{status}</p>
    </div>
)

const ColumnCard = (props: IHeroColumnProps) => {
    const {title, text, buttonText, buttonUrl} = props

    return (
        <div className={columnCardClasses}>
            <h4>{title}</h4>
            {text && (<p>{text}</p>)}
            <a href={buttonUrl} >
                {buttonText}
            </a>
        </div>
    )
}

const HeroColumn = (props: IHeroColumnProps) => {
    return (
            <div className="w-full justify-center mx-3">
                {/*<div>*/}
                {/*    <ColumnCard {...props}/>*/}
                {/*</div>*/}
            </div>
        )
}

export default (
    {
        title,
        subtitle,
        body,
        background,
        columns,
        image,
        quicklinks,
        socials,
        scroll,
        status,
        skillsRef,
    }: IHeroBlockProps) => {

    const heroClasses = classnames(
        {[`bg-${background.background_colour}`]: background.background_colour},
        {[`${background.gradient_direction} ${background.background_gradient}`]: background.background_gradient},
        "min-h-screen",
        "min-w-screen",
        "text-center",
        "grid",
        "auto-cols-min",
        "sm:grid-cols-6",
        "grid-rows-6",
    )

    return (
        <FadeScroll id="hero-block" blockClasses={heroClasses}>
            <WorkStatus status={status}/>
            <HeroText title={title} subtitle={subtitle} body={body}/>
            <HeroQuickLinks links={quicklinks}/>
            <Image image={image} imageClasses={heroImageClasses} delay={1000} />
            <div className="items-center justify-between relative">
                {
                    columns?.length && (
                        columns.map((col, index) => (
                            <HeroColumn key={index} {...col} />
                        ))
                    )
                }
            </div>
            <HeroSocials links={socials}/>
        </FadeScroll>
    )
}