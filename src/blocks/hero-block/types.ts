export interface IHeroBlockProps {
    title: any
    subtitle: any
    background: any
    body: string
    columns: any[]
    image: {_ref: string}
    scrollBtnText: string
    scrollBtnUrl: string
    scrollBtnIcon: boolean
    contactBtn: boolean
    contactBtnText: string
    contactBtnUrl: string
    contactBtnColour: string
    contactBtnShape: string
    status: string
}

export interface IHeroColumnProps {
    title: string
    text: string
    buttonText: string
    buttonUrl: string
}

