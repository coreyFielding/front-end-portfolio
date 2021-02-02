export interface IHeroBlockProps {
    title: string
    text: string
    textColour: string
    textPositionX: string
    textPositionY: string
    body: string
    columns: any[]
    image: {_ref: string}
    backgroundColour: string
    backgroundGradient: string
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

