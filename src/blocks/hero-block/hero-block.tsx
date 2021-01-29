import React from "react"

type HeroBlockProps = {
    block: {
        hero: {
            hero_title: string
            hero_subtitle: string
            columns: any[]
        }
    }
}

const parseHeroBlock = ({block}: HeroBlockProps) => {
    return {
        title: block.hero.hero_title,
        subtitle: block.hero.hero_subtitle,
        columns: block.hero.columns.map((column) => ({
            title: column.column_title,
            text: column.column_subTitle,
            icon: column.columnButtonIcon,
            buttonUrl: column.columnButtonUrl,
            buttonText: column.columnButtonText,
        })),
    }
}

const HeroTitle = ({title, subtitle}) => (
    <div className="row justify-center text-center">
        <div className="col col-lg-12">
            <h1 className="text-white mt-0 lg:mt-4 mb-4">{title}</h1>
            <p className="text-white h5 font-weight-normal opacity-8 mb-4 lg:mb-6">{subtitle}</p>
        </div>
    </div>
)

type HeroColumnProps = {
    title: string
    text: string
}

const ColumnCard = (props: HeroColumnProps) => {
    const {title, text} = props
    return (
        <div></div>
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

export default ({block}) => {
    const {title, subtitle} = parseHeroBlock(block)
    return (
        <section className="py-0 md:py-3 lg:pt-6 lg:pb-5 bg-gray-200 relative min-h-screen">
            <div className="container">
                <HeroTitle title={title} subtitle={subtitle} />
            </div>
        </section>
    )
}