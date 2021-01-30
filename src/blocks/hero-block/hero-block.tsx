import React from "react"
import Img from "gatsby-image"

const HeroTitle = ({title, text}) => (
    <div className="flex items-center">
        <div className="text-center">
            <h1 className="text-white mt-0 lg:mt-4 mb-4">{title}</h1>
            <p className="text-white h5 font-weight-normal opacity-8 mb-4 lg:mb-6">{text}</p>
        </div>
    </div>
)

type HeroColumnProps = {
    title: string
    text: string
    buttonText: string
    buttonUrl: string
}

const ColumnCard = (props: HeroColumnProps) => {
    const {title, text, buttonText, buttonUrl} = props
    return (
        <div>
            <h4>{title}</h4>
            {text && (<p>{text}</p>)}
            <a href={buttonUrl} >
                {buttonText}
            </a>
        </div>
    )
}

const HeroColumn = (props: HeroColumnProps) => {
    return (
            <div className="mt-0">
                <div className="card border-0 hover-shadow-lg hover-translate-y-n10">
                    <ColumnCard {...props}/>
                </div>
            </div>
        )
}

type HeroBlockProps = {
    heroData: {
        title: string
        text: string
        columns: any[]
        image: {_ref: string}
    }
}

export default ({heroData}: HeroBlockProps) => {
    const {
        title,
        text,
        columns,
        image
    } = heroData

    const heroImg = image.asset.localFile.childImageSharp.fixed
    console.log(heroImg)
    return (
        <section className="flex items-center justify-center bg-gray-200 min-h-screen text-center">
            <div className="container">
                <Img fixed={heroImg.srcWebp} />
                <div className="flex justify-center absolute inset-x-0 top-0 h-64">
                   <HeroTitle title={title} text={text} />
                </div>

                <div className="flex items-center justify-between mt-5">
                    {
                        columns?.length && (
                            columns.map((col, index) => (
                                <HeroColumn key={index} {...col} />
                            ))
                        )
                    }
                </div>

            </div>
        </section>
    )
}