import React from 'react'
import Image from '../../components/Image'
import Button from '../../components/button'
import classnames from 'classnames'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import setupIconLibrary from "../../utils/setup-icon-library"
setupIconLibrary()

const ProfileInfo = (
    {name,
    profession,
    degree,
    _type,
    location, ...rest}) => {

    const stats = {...rest}

    return (
        <div className="grid justify-items-center" style={{fontFamily: 'League Spartan'}}>
            <div className="flex ml-5">
                <h2 className="text-center">{name}</h2>
                <span className="mt-2 ml-3">
                  <HireStatus status={status}/>
                </span>

            </div>

            <p className="text-sm m-0 -mt-3 p-0">{profession}</p>
            {/*<p className="text-xs m-0 p-0">{degree}</p>*/}

            <span className="flex justify-between w-20 mt-3 mb-4">
                <FontAwesomeIcon icon={['fas', 'map-marker-alt']} size={'1x'} />
                <p className="text-sm font-extrabold m-0 p-0">{location}</p>
            </span>

            <div className="grid grid-cols-3 grid-rows-1 px-5 w-full m-auto mt-4">
                {
                    Object.keys(stats).map((key, index) => (
                        <span key={index} className="text-center">
                            <h4 className="text-xs sm:text-lg text-gray-600 font-bold text-royal-400">{stats[key]}</h4>
                            <p className="text-xs sm:text-md">{key.split('_').join(' ').charAt(0).toUpperCase() + key.slice(1)}</p>
                        </span>
                    ))
                }
            </div>

        </div>
    )
}

const HireStatus = ({status}) => (
    <span className={`w-auto px-2 ${status ? `bg-green-400` : `bg-red-400` } rounded-full text-white text-sm font-bold`}>
        {status ? 'Available for hire' : 'Hired'}
    </span>
)

const ContactButton = (props) => (
    <div className="grid justify-items-center text-center">
        <Button {...props}>
            Get in touch
        </Button>
    </div>
)

type AboutBlockProps = {
    profile: any
    bio: string
    avatar: any
    status: string
    contact: any

}

export default ({profile, bio, avatar, status, contact}: AboutBlockProps) => {
    const aboutCardClasses = classnames(
        "sm:w-5/6",
        "mb-5",
        "sm:mb-0",
        "sm:mx-0",
        "sm:shadow-lg",
        "rounded-md",
        "border",
        "sm:border-0",
        "p-2",
        "pb-3",
        "transform",
        "duration-300",
        "bg-white"
    )
    return (
        <section id="about-block" className="min-h-screen sm:min-h-3/4 flex justify-center">
            <div className={aboutCardClasses}>
                <div className="grid justify-items-center">
                    <Image image={avatar.img} width={120} shape={avatar.shape}/>
                </div>
                <ProfileInfo {...profile} />
                <div className="text-black text-center text-sm w-1/2 m-auto">
                    <p>{bio}</p>
                </div>
                <ContactButton {...contact}/>
            </div>
        </section>
    )
}