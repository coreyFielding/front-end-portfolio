import React from 'react'

type AboutBlockProps = {
    aboutData: {
        bio: string
    }

}

export default ({aboutData}: AboutBlockProps) => {
    const {bio} = aboutData

    return (
        <section id="about-block" className="h-auto">
            {bio}
        </section>
    )
}