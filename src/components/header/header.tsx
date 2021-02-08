import React from "react"
import classnames from 'classnames'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import setupIconLibrary from "../../utils/setup-icon-library"
setupIconLibrary()

const pageLinks = [
    {name: "Home", path: "#hero-block"},
    {name: "About", path: "#About-block"},
    {name: "Projects", path: "#project-block"},
    {name: "Resume", path: "#resume-block"},
    {name: "Contact", path: "#contact-block"}
]

const NavLinks = () => {
    const navlinkClasses = classnames(
        "text-xs",
        "px-6",
        "hover:text-indigo-500",
        "transform",
        "hover:-translate-y-1",
        "duration-200",
    )
    return (
        <div className="m-auto justify-center text-center">
            <div className="grid grid-cols-6">
                {
                    pageLinks && (
                        pageLinks.map((link) => (
                            <a href={link.path} className={navlinkClasses}>
                                {link.name}
                            </a>
                        ))
                    )
                }
            </div>
        </div>
    )
}

const SocialLinks = () => {
    const links = [
        {icon: 'github', url: '#'},
        {icon: 'instagram', url: '#', hoverColour: 'red-500'}
    ]
    const socialLinkClasses = classnames(
        "block",
        "px-3",
        "py-2",
        "text-base",
        "font-medium",
        "hover:text-indigo-500",
        "transform",
        "duration-200"
    )

    return (
        <div className="flex end -mr-8">
            {
                links.map((link) => (
                    <a href={link.url} className={`hover:text-${link.hoverColour} ${socialLinkClasses}`}>
                        <FontAwesomeIcon icon={['fab', link.icon as any]} />
                    </a>
                ))
            }
        </div>
    )
}

export default () => (
    <nav className="absolute top-0 left-0 right-0">
        <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-8 z-50">
                {/* Mobile hamburger */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-expanded="false">
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                corey fielding

                {/*/!*  Nav links  *!/*/}
                {/*<NavLinks />*/}

                {/*/!*  Socials  *!/*/}
                {/*<SocialLinks />*/}
            </div>
        </div>
    </nav>
)