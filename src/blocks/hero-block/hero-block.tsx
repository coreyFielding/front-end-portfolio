import React from "react"
import Img from "gatsby-image"
import { IHeroBlockProps, IHeroColumnProps } from "./types";
import { columnCardClasses } from './styles'
import HeroFooter from './hero-footer'
import classnames from 'classnames'
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../../components/visibilitySensor"

const HeroTitle = (props) => {
    const {titleText, titleSize, titleColour, posX} = props
    return (
        <div className={`${posX} w-full`}>
            <h1 className={`${titleSize} ${titleColour} mt-0 lg:mt-4 mb-4`} style={{fontFamily: 'League Spartan'}}>{titleText}</h1>
        </div>
    )
}

const HeroSubtitle = (props) => {
    const {text, colour, size, posX} = props
    return (
        <div className={`${posX}`}>
            <h3 className={`${size} ${colour} text-center opacity-8 mb-4 lg:mb-6`}>{text}</h3>
        </div>
    )
}

const HeroBody = (props) => {
    const {body} = props

    return (
            body && (<span className="text-white">{body}</span>)
    )
}

const HeroText = ({title, subtitle}) => (
    <div className="absolute inset-x-0 top-80 h-64">
        <HeroTitle {...title} />
        <HeroSubtitle {...subtitle} />
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

export default (props: IHeroBlockProps) => {
    const {
        title,
        subtitle,
        background,
        body,
        columns,
        image = null,
    } = props

    const heroFooter = {
        status: {
            text: props.status
        },
        heroScroll: {
            text: props.scrollBtnText,
            url: props.scrollBtnUrl,
            icon: props.scrollBtnIcon
        },
        heroContact: {
            text: props.contactBtnText,
            url: props.contactBtnUrl,
            shape: props.contactBtnShape,
            colour: props.contactBtnColour,
            textColour: 'white'
        }
    }

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

    <section className={heroClasses}>
        <div className="container">
            {heroImg && <Img fixed={heroImg.srcWebp} />}
            <HeroText title={title} subtitle={subtitle}/>
            <div className="flex top-40 items-center justify-between relative">
                {
                    columns?.length && (
                        columns.map((col, index) => (
                            <HeroColumn key={index} {...col} />
                        ))
                    )
                }
            </div>
            <HeroFooter {...heroFooter}/>
        </div>
    </section>
    )
}