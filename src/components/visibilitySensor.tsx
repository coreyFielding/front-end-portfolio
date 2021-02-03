import React, {useState} from 'react'
import VSensor from "react-visibility-sensor"

export default ({once, children}) => {
    const [active, setActive] = useState(true)

    return (
        <VSensor active={active} onChange={isVisible => once && isVisible && setActive(false)}>
            {({isVisible}) => children({ isVisible })}
        </VSensor>
    )
}