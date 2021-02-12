import React from "react";
import { gridButtonClasses } from "./classes"

interface IGridButtonProps {
    text: string
    url: string
    shape: string
    colour: string
}

const GridButton = ({...button}: IGridButtonProps) => (
    <div className="w-full flex-initial sm:w-1/2 px-4 mb-4 md:mb-4">
        <a href={button.url} className={`${button.shape} bg-${button.colour} ${gridButtonClasses}`}>
            <div className="m-auto max-w-sm">
                <h3 className="font-semibold mb-3">{button.text}</h3>
            </div>
        </a>
    </div>
)

interface IButtonGridProps {
    buttons: IGridButtonProps[]
}
export default ({buttons}: IButtonGridProps) => {
    return (
        <section className="bg-white -mt-10">
            <div className="mx-auto w-full px-0 sm:px-4 py-18 max-w-6xl h-1/3">
                <div className="flex flex-wrap">
                    {
                        buttons && buttons.map((button, index) => (
                            <GridButton key={index} {...button} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}