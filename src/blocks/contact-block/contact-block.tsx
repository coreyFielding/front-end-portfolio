import React from 'react'
import Button from '../../components/button'
import Form from '../form-block'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import setupIconLibrary from "../../utils/setup-icon-library"
setupIconLibrary()

export default ({email, form, socials}) => {
    return (
        <section>
            <div className="bg-blueRibbon-500 w-full sm:h-1/2">
                <div className="flex justify-between mx-auto w-2/3 h-full">
                    <div className="w-full sm:w-1/2">
                        <div className="px-3 py-10 sm:py-20 lg:px-0 text-cararra-50">
                            <h1 className="mt-8 md:mt-12 text-3xl md:text-5xl leading-tight">
                                <div className="h-28 md:h-45">
                                    <div style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                                <span>
                                    I'd love
                                </span>
                                    </div>
                                    <div style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                                <span>
                                    to hear
                                </span>
                                    </div>
                                    <div style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                                <span>
                                    from you.
                                </span>
                                    </div>
                                </div>
                            </h1>
                            <div className="w-80 flex flex-col mt-2 mb-5 text-md mt-20">
                                <span>Got a project you'd like me to work on?</span>
                                <span>Looking for a website?</span>
                                <span className="mt-10">
                                    <Button {...email}>
                                        {email.text}
                                    </Button>
                                    <span className="text-sm m-2">
                                      Or find me on
                                    </span>
                                </span>
                                <div className="flex justify-between w-24 h-10 mt-5">
                                    {
                                        socials.map((link, index) => (
                                            <a href={link.url} key={index} className={`hover:text-${link.icon} duration-300`}>
                                               <span>
                                                <FontAwesomeIcon icon={['fab', link.icon as any]} />
                                            </span>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-2/6 px-3 py-10 sm:py-20 lg:px-0">
                        <Form {...form} />
                    </div>
                </div>
            </div>
        </section>
    )
}