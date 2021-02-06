import React from 'react'
import sanityClient from "@sanity/client";
import sanityImageUrl from "@sanity/image-url";
import FadeMount from "../animation/fadeMount/fade-mount";

export default ({image, width, blur = 0, imageClasses = '', delay}) => {
    const client = sanityClient({
        dataset: 'production',
        projectId: '8p7swc8i'
    })

    const builder = sanityImageUrl(client)

    const urlFor = (src) => {
        return builder.image(src)
    }

    return (
        <FadeMount delay={delay} classes={imageClasses}>
            <img src={urlFor(image).width(width).url()}/>
        </FadeMount>
    )

}