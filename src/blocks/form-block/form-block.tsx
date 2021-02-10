import React from 'react'
import styled from 'styled-components'
import Button from '../../components/button'
// lcc.benefits @leeds.gov.uk
// NI name,

const Form = styled.form`
    & > label {
        font-size: 15px;
        color: #a6a6a6;
        font-weight: bold;
    }
    & > input {
        border-bottom: .3px solid #a6a6a6;
        &::placeholder {
            font-size: 16px;
        }
        &::focus {
            outline: none;
        }
    }
    & > select {
       font-size: 12px; 
    }
    button {
        width: 25%;
        margin: auto;
        border-radius: 8px;
        border: none;
    }
`

const FormBody = (props) => {
    const {fields, submit} = props

    return (
        <Form
           method="POST"
           dangerouslySetInnerHTML={{__html: [fields, '<button type="submit" className="border-2">Send</button>']}}
           className="flex flex-col p-5 px-10"
        />
    )
}

interface IFormBlockProps {
    title: string
    background_colour: string
    fields: string[]
    button: any
}
export default ({title, background_colour, ...rest}: IFormBlockProps) => {
    return (
        <section>
            <div className={`shadow-lg bg-${background_colour} rounded-md text-left`}>
                <h1 className="text-3xl md:text-2xl p-4" style={{fontFamily: 'League Spartan'}}>
                    <div className="h-10 sm:h-10">
                        <span>
                            {title}
                        </span>
                    </div>
                </h1>
                <FormBody {...rest} />
            </div>
        </section>
    )
}