import React from 'react'
import Image from '../../components/Image'
import Button from '../../components/button'
import styled from 'styled-components'

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
`

export default (
    {
        title,
        description,
        image,
        logo,
        tech_stack,
        button
    }
    ) => {

    const {bg_img, width, overlay} = image

    return (
        <div className="h-40 sm:min-h-screen relative w-80 sm:w-full m-auto shadow-lg rounded-lg sm:rounded-none p-4 sm:p-0">
            {overlay && (
                <Overlay className="absolute grid grid-cols-6 grid-rows-4 h-full w-full">
                    <div className="col-start-1 col-end-4 row-start-2 grid justify-items-left ml-4">
                        <h1 className="text-8xl text-white hidden sm:block">{title}</h1>
                        <span className="text-white hidden sm:block">
                            {description}
                        </span>
                        <div className="grid grid-cols-6 grid-rows-4 sm:grid-rows-2 mt-2 -mx-2">
                            <span className="col-start-1 col-end-4 hidden sm:block">
                              {
                                  tech_stack.map((item, index) => (
                                      <span className={`rounded-md text-white text-xs bg-${item.toLowerCase()} p-1 px-2 m-2 font-bold`}>{item}</span>
                                  ))
                              }
                            </span>
                                    <span className="col-start-5 row-start-4 sm:row-start-1 w-36">
                                <Button {...button}>{button.text}</Button>
                            </span>
                        </div>
                    </div>
                </Overlay>
            )}

            <div className="grid justify-items-center m-5 visible sm:invisible">
                <Image image={logo.img} width={50} shape={logo.shape} delay={0}/>
            </div>

            <div className="invisible sm:visible">
                <Image image={bg_img} width={width} delay={0}/>
            </div>
        </div>
    )
}