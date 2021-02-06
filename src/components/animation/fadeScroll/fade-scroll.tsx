import React from "react";
import {useEffect, useRef, useState} from "react";
import styled from 'styled-components'
import './styles.css'

const Section = styled.section`
    scroll-snap-align: start;
    scroll-snap-stop: normal;
`

export default ({id, blockClasses = '', children}) => {
    const [isVisible, setVisible] = useState(true)
    const domRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => entry.isIntersecting && setVisible(true))
        })

        observer.observe(domRef.current)
    }, [])

    return (
        <Section id={id} className={`fade-in-section h-screen ${blockClasses} ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {children}
        </Section>
    )
}