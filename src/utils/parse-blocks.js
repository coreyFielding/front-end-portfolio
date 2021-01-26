export default function parseBlockData({allSanityAuthor: data}) {
    const block = data.edges[0].node
    return {
        name: block.name,
        bio: block.bio[0].children[0].text,
    }
}