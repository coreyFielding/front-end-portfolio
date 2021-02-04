export const BlockType = {
    HERO: "hero",
    ABOUT: "about"
}

export const parseHeroBlock = (block) => {
    console.log(block)
    return {
        title: block.hero_title,
        subtitle: block.hero_subtitle,
        background: block.hero_background,
        body: block.hero_body,
        quicklinks: block.quick_links,
        scroll: block.hero_scroll,
        socials: block.socials,
        columns: block.columns?._rawColumns.map((column) => ({
            title: column.column_title,
            text: column.column_subtext,
            buttonText: column.column_buttonText,
            buttonUrl: column.column_buttonUrl
        })),
        image: block.image,
        status: block.status,
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
    if (parsers.has(block._type)) {
        return parsers.get(block._type)(data)
    }
}

