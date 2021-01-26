import React from "react"
import AuthorQuery from './query'

type AuthorBlockProps = {
    name: string
    bio: string
}

const HeroTitle = ({name, bio}: AuthorBlockProps) => (
    <div className="row justify-center text-center">
        <div className="col col-lg-12">
            <h1 className="text-white mt-0 lg:mt-4 mb-4">{name}</h1>
            <p className="text-white h5 font-weight-normal opacity-8 mb-4 lg:mb-6">{bio}</p>
        </div>
    </div>
)

const AuthorBlock = ({name, bio}: AuthorBlockProps) => (
    <section className="py-0 md:py-3 lg:pt-6 lg:pb-5 bg-gray-200 relative min-h-screen">
        <div className="container">
            <HeroTitle name={name} bio={bio} />
        </div>
    </section>
)


export default () => {
    const data = AuthorQuery()

    return (
        <AuthorBlock {...data} />
    )
}