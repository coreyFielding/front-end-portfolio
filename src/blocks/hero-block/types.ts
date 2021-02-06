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

interface IHeroQuicklinks {
    text: string
    icon: string
}

interface IHeroSocials {
    url: string
    icon: string
}

interface IHeroColumn {
    title: string
    text: string
    buttonText: string
    buttonUrl: string
}

export interface IHeroBlockProps {
    title: IHeroTitle
    subtitle: IHeroSubtitle
    background: any
    body: string
    quicklinks: IHeroQuicklinks[]
    scroll: any
    socials: IHeroSocials[]
    columns: IHeroColumn[]
    image: any
    status: string
    skillsRef: any
}

