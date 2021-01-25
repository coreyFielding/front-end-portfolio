export const BlockType = {
    AUTHOR: "allSanityAuthor"
}

function parseAuthor(block) {
    return {
        name: block.name,
        bio: block._rawbio[0].children.text,
        type: block._type
    }
}

const parsers = new Map([
    [BlockType.author, parseAuthor]
])

export default function parsePageData(data) {
    const blocks = data
}