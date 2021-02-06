import React from 'react'
import {Wrapper} from './styles'

export default (
    {
       duration = 1000,
       delay = 0,
       float = false,
       classes,
       children,
    }) => {
    return (
        <Wrapper className={classes} style={{animationDuration: duration + 'ms', animationDelay: delay + 'ms'}} float={float}>
            {children}
        </Wrapper>
    )
}