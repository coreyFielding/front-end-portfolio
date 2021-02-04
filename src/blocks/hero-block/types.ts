interface IHeroTitle {
    text: string
    size: string
    colour: string
    posX: string
}
interface IHeroSubtitle {
    text: string
    size: string
    colour: string
    posX: string
}

interface IHeroBackground {
    gradient: string
    direction: string
}

export interface IHeroBlockProps {
    title: IHeroTitle
    subtitle: IHeroSubtitle
    background: any
    body: string
    quicklinks: any[]
    scroll: any
    socials: any
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

