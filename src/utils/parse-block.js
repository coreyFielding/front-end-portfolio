export const BlockType = {
    HERO: "hero",
    BUTTON_GRID: "button-grid",
    PROJECT: "project",
    SKILLS: "skills",
    ABOUT: "about",
    CONTACT: "contact",
    RESUME: "resume"
}

export const parseHeroBlock = (block) => {
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

export const parseButtonGridBlock = (block) => {
    return {
        buttons: block.button.map((button) => ({
            text: button.button_text,
            url: button.button_url,
            shape: button.button_shape,
            colour: button.button_colour
        }))
    }
}

export const parseAboutBlock = (block) => {
    return {
        profile: block.about_profile,
        bio: block.about_bio,
        avatar: block.about_avatar,
        status: block.hire_status,
        contact: block.contact_btn
    }
}

export const parseProjectBlock = (block) => {
    return {
        title: block.title,
        description: block.description,
        tech_stack: block.tech_stack,
        image: block.project_img,
        logo: block.company_logo,
        button: block.button
    }
}

export const parseSkillsBlock = (block) => {
    return {
        skillColumns: block.skills_grid.map((column) => ({
            title: column.title,
            level: column.level,
            image: column.image
        }))
    }
}

export const parseContactBlock = (block) => {
    return {
        email: block.email,
        form: block.contact_form,
        socials: block.social_links
    }
}

export const parseResumeBlock = (block) => {
    return {
        education: {
            type: 'education',
            items: block.resume_education
        },
        experience: {
            type: 'experience',
            items: block.resume_experience
        },

        skills: {
            type: 'skills',
            items: block.resume_key_skills
        }
    }
}

const parsers = new Map([
    [BlockType.HERO, parseHeroBlock],
    [BlockType.BUTTON_GRID, parseButtonGridBlock],
    [BlockType.ABOUT, parseAboutBlock],
    [BlockType.PROJECT, parseProjectBlock],
    [BlockType.SKILLS, parseSkillsBlock],
    [BlockType.CONTACT, parseContactBlock],
    [BlockType.RESUME, parseResumeBlock]
])

export default (data) => {
    const block = data
    if (parsers.has(block._type)) {
        return parsers.get(block._type)(data)
    }
}

