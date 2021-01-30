export const BlockType = {
    HERO: "hero",
}

export const parseHeroBlock = (block) => {
    return {
        title: block.hero_title,
        text: block.hero_subtitle,
        columns: block.columns._rawColumns.map((column) => ({
            title: column.column_title,
            text: column.column_subtext,
            buttonText: column.column_buttonText,
            buttonUrl: column.column_buttonUrl
        })),
        image: block.image
    }
}

const parsers = new Map([
    [BlockType.HERO, parseHeroBlock]
])

export default (data) => {
    const block = data

    if (parsers.has(block._type)) {
        return parsers.get(block._type)(data)
    }
}

