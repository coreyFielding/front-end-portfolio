import React from "react"
import Img from "gatsby-image"
import { IHeroBlockProps, IHeroColumnProps } from "./types";
import { columnCardClasses, heroScrollClasses, socialLinkClasses, heroFooterClasses } from './classes'
import './styles.css'
import Button from '../../components/button'
import classnames from 'classnames'
import FadeIn from '../../components/animation/fadeScroll/fade-scroll'
import FadeMount from '../../components/animation/fadeMount/fade-mount'
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../../components/visibilitySensor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import setupIconLibrary from "../../utils/setup-icon-library"
setupIconLibrary()

const HeroTitle = ({text, size, colour, posX}) => (
    <div className={`${posX} w-full`}>
        <h1 className={`${size} ${colour} mt-0 lg:mt-4 mb-4`} style={{fontFamily: 'League Spartan'}}>{text}</h1>
    </div>
)

const HeroSubtitle = ({text, colour, size, posX}) => (
    <div className={`${posX}`}>
        <h3 className={`${size} ${colour} text-center opacity-8 mb-4 lg:mb-6`}>{text}</h3>
    </div>
)

const HeroBody = (props) => {
    const {body} = props

    return (
            body ? (<span className="text-white">{body}</span>) : null
    )
}

const HeroText = ({title, subtitle, body}) => (
    <FadeMount delay={300}>
        <div className="absolute inset-x-0 top-80 h-64">
            <HeroTitle {...title} />
            <HeroSubtitle {...subtitle} />
            <HeroBody {...body}/>
        </div>
    </FadeMount>
)

const HeroQuickLinks = ({links}) => (
    <FadeMount delay={800}>
        <div className="relative inset-x-0 top-20">
            {
                links.map((link, index) => (
                    <span className="mx-3">
                    <Button key={index} {...link}>{link.text}</Button>
                </span>

                ))
            }
        </div>
    </FadeMount>
)

const HeroSocials = ({links}) => (
    <div className="absolute right-0">
        {
            links.map((link) => (
                <a href={link.url} className={`hover:text-${link.hoverColour} ${socialLinkClasses}`}>
                    <FontAwesomeIcon icon={['fab', link.icon as any]} />
                </a>
            ))
        }
    </div>
)

const HeroScroll = ({url, effect}) => (
    effect === 'mouse' ? (
        <a id="scroll" href={url} className={heroScrollClasses}><span></span></a>
    ) : null
)

const WorkStatus = ({status}) => {
    const statusClasses = classnames(
        "bg-green-700",
        "bg-opacity-30",
        "rounded-full",
        "text-green-900",
        "px-2",
        "mt-1",
        "text-xs",
        "w-36",
        "h-6",
        "flex"
    )

    return (
        <div className={statusClasses}>
            <span className="w-2 h-2 bg-lime-400 rounded-full inline-block m-1 mt-2" />
            <p>{status}</p>
        </div>
    )
}

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

export default (props: IHeroBlockProps) => {
    const {
        title,
        subtitle,
        body,
        background,
        columns,
        quicklinks,
        socials,
        scroll,
        status,
        image = null,
    } = props

    const heroImg = image?.asset.localFile.childImageSharp.fixed
    const heroClasses = classnames(
        {[`bg-${background.background_colour}`]: background.background_colour},
        {[`${background.gradient_direction} ${background.background_gradient}`]: background.background_gradient},
        "flex",
        "items-center",
        "justify-center",
        "min-h-screen",
        "text-center",
        )
    return (

        <FadeIn>
            <section className={heroClasses}>
                <div className="container">
                    {heroImg && <Img fixed={heroImg.srcWebp} />}
                    <HeroText title={title} subtitle={subtitle} body={body}/>
                        <HeroQuickLinks links={quicklinks}/>
                    <div className="flex top-40 items-center justify-between relative">
                        {
                            columns?.length && (
                                columns.map((col, index) => (
                                    <HeroColumn key={index} {...col} />
                                ))
                            )
                        }
                    </div>

                    <HeroSocials links={socials}/>

                    <div className={heroFooterClasses}>
                        <WorkStatus status={status}/>
                        <HeroScroll {...scroll}/>
                    </div>

                </div>
            </section>
        </FadeIn>
    )
}