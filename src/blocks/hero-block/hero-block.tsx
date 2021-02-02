import React from "react"
import Img from "gatsby-image"
import { IHeroBlockProps, IHeroColumnProps } from "./types";
import { columnCardClasses } from './styles'
import HeroFooter from './hero-footer'
import classnames from 'classnames'

const HeroTitle = (
    {
        title,
        text,
        body,
        textColour,
        textPositionX,
    }) => (
    <div className="flex p-3">
        <div className={`text-${textPositionX}`}>
            <h1 className={`text-9xl text-${textColour} mt-0 lg:mt-4 mb-4`} style={{fontFamily: 'League Spartan'}}>{title}</h1>
            <h3 className={`font-normal text-${textColour} text-right opacity-8 mb-4 lg:mb-6`}>{text}</h3>
            <div className="w-1/2 m-auto">
                {
                    body && (
                        <span className="text-white">{body}</span>
                    )
                }
            </div>
        </div>
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
    console.log(props)
    const {
        title,
        text,
        textColour,
        textPositionX,
        textPositionY,
        body,
        columns,
        image = null,
        backgroundColour,
        backgroundGradient
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
        {[`bg-${backgroundColour}`]: backgroundColour},
        {[`${backgroundGradient}`]: backgroundGradient},
        "flex",
        "items-center",
        "justify-center",
        "min-h-screen",
        "text-center"
        )
    return (
        <section className={heroClasses}>
            <div className="container">
                {heroImg && <Img fixed={heroImg.srcWebp} />}
                <div className="flex absolute inset-x-0 top-64 h-64">
                   <HeroTitle
                       title={title}
                       text={text}
                       body={body}
                       textColour={textColour}
                       textPositionX={textPositionX}/>
                </div>
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