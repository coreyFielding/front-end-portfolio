export const BlockType = {
    HERO: "hero",
    ABOUT: "about"
}

export const parseHeroBlock = (block) => {
    return {
        title: block.hero_title,
        text: block.hero_subtitle,
        textColour: block.hero_textColour,
        textPositionX: block.hero_textPositionX,
        textPositionY: block.hero_textPositionY,
        body: block.hero_body,
        columns: block.columns?._rawColumns.map((column) => ({
            title: column.column_title,
            text: column.column_subtext,
            buttonText: column.column_buttonText,
            buttonUrl: column.column_buttonUrl
        })),
        image: block.image,
        backgroundColour: block.background_colour,
        backgroundGradient: block.background_gradient,
        scrollBtnText: block.hero_scrollBtnText,
        scrollBtnUrl: block.hero_scrollBtnUrl,
        scrollBtnIcon: block.hero_scrollBtnIcon,
        showContactBtn: block.hero_contactBtn,
        contactBtnText: block.hero_contactBtnText,
        contactBtnUrl: block.hero_contactBtnUrl,
        contactBtnColour: block.hero_contactBtnColour,
        contactBtnShape: block.hero_contactBtnShape,
        status: block.workStatus,
    }
}

export const parseAboutBlock = (block) => {
    return {
        bio: block.about_bio,
        avatar: block.about_avatar
    }
}

const parsers = new Map([
    [BlockType.HERO, parseHeroBlock],
    [BlockType.ABOUT, parseAboutBlock],
])

export default (data) => {
    const block = data
    console.log(block)
    if (parsers.has(block._type)) {
        console.log('has type')
        return parsers.get(block._type)(data)
    }
}

