export const BlockType = {
    HERO: "hero",
    SKILLS: "skills",
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
        image: block.hero_image,
        scroll: block.hero_scroll,
        socials: block.socials,
        columns: block.columns?._rawColumns.map((column) => ({
            title: column.column_title,
            text: column.column_subtext,
            buttonText: column.column_buttonText,
            buttonUrl: column.column_buttonUrl
        })),
        status: block.status,
    }
}

export const parseSkillsBlock = (block) => {
    console.log(block)
    return {
        skillColumns: block.skills_grid.map((column) => ({
            title: column.title,
            level: column.level,
            image: column.image
        }))
    }
}

const parsers = new Map([
    [BlockType.HERO, parseHeroBlock],
    [BlockType.SKILLS, parseSkillsBlock]
])

export default (data) => {
    console.log(data)
    const block = data
    if (parsers.has(block._type)) {
        return parsers.get(block._type)(data)
    }
}

