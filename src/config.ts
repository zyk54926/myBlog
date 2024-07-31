export const BASE_URL:string = import.meta.env.BASE_URL
export const siteConfig: SiteConfig = {
    title: "南风知我意",
    language: "zh",
    description: "前端，vue,astro,github,githun page",
    keywords: "前端小白鼠",
    author: "zyk❤ly",
    avatar: `${BASE_URL}/avatar.png`,
    favicon: `${BASE_URL}/favicon.png`,
    // 基于你的用户名的以下网址：https://<username>.github.io
    site: "https://zykMyblog.com",
    base:'/myBlog',
    page_size: 10,
}

export const navBarConfig: NavBarConfig = {
    links: [
        {
            name: 'Projects',
            url: `${BASE_URL}/projects`
        },
        {
            name: 'Links',
            url: `${BASE_URL}/links`
        },
        {
            name: 'About',
            url: `${BASE_URL}/about`
        }
    ]
}

export const socialLinks: SocialLink[] = [
    // https://icon-sets.iconify.design/material-symbols/
    {
        label: 'GitHub',
        icon: 'mdi-github',
        url: 'https://github.com/Jazee6'
    },
    {
        label: 'Email',
        icon: 'material-symbols:mail-rounded',
        url: 'mailto:jazee@jaze.top'
    }
]

interface SiteConfig {
    title: string
    language: string
    description: string
    keywords: string
    author: string
    avatar: string
    favicon: string
    site: string
    base:string
    page_size: number
    twikoo_uri?: string     // https://twikoo.js.org/
}

interface NavBarConfig {
    links: {
        name: string
        url: string
        target?: string
    }[]
}

interface SocialLink {
    label: string
    icon: string
    url: string
}
