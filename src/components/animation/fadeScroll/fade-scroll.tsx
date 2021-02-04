import React from "react";
import {useEffect, useRef, useState} from "react";
import './styles.css'

export default (props) => {
    const [isVisible, setVisible] = useState(true)
    const domRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting))
        })

        observer.observe(domRef.current)
    }, [])

    return (
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {props.children}
        </div>
    )
}