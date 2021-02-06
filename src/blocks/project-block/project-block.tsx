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
        tech_stack,
        button
    }
    ) => {
    return (
        <div className="min-h-screen relative">
            <Overlay className="absolute grid grid-cols-6 grid-rows-4 w-full h-full top-0 left-0">
                <div className="col-start-1 col-end-4 row-start-2 grid justify-items-left ml-4">
                    <h1 className="text-8xl text-white">{title}</h1>
                    <span className="text-white">
                        {description}
                    </span>
                    <div className="grid grid-cols-5 mt-2 -mx-2">
                        <span className="col-start-1 col-end-4">
                          {
                              tech_stack.map((item, index) => (
                                  <span className={`rounded-md text-white text-xs bg-${item.toLowerCase()} p-1 px-2 m-2 font-bold`}>{item}</span>
                              ))
                          }
                        </span>
                        <span className="col-start-5 w-36">
                            <Button {...button}>{button.text}</Button>
                        </span>
                    </div>
                </div>
            </Overlay>
            <Image image={image} width={1500} delay={0}/>
        </div>
    )
}