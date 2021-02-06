import React from "react";
import Image from '../../components/Image'
import FadeScroll from "../../components/animation/fadeScroll/fade-scroll";
import classnames from 'classnames'

export default ({skillColumns}) => {
    const skillImageClasses = classnames(
        "w-32"
    )
    return (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-6 m-6">
                {
                    skillColumns.map((column, index) => (
                        <div className="grid justify-items-center">
                            <Image image={column.image} imageClasses={skillImageClasses}/>
                            <span>{column.title}</span>
                            <span className="rounded-full p-1 bg-green-500">{column.level}</span>
                        </div>
                    ))
                }
            </div>
    )
}