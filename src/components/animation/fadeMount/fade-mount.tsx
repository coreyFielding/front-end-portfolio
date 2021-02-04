import React from 'react'
import {Wrapper} from './styles'

export default (
    {
       duration = 1000,
       delay = 0,
       children,
    }) => {
    return (
        <Wrapper style={{animationDuration: duration + 'ms', animationDelay: delay + 'ms'}}>
            {children}
        </Wrapper>
    )
}