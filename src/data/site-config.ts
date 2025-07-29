export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://mattellis.foo',
    title: 'Matt Ellis',
    subtitle: 'Software Engineer',
    description: 'Personal website of software engineer, Matt Ellis',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'View code',
            href: 'https://github.com/Skux4life/dante-portfolio'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        }
    ],
    hero: {
        title: '嗨 - 欢迎来到我的网站',
        text: "I'm **Matt Ellis**, a self taught software engineer who still has imposter syndrome. I enjoy solving problems, learning new things, and creating something that is useful. Feel free to explore some of my personal coding endeavors on <a href='https://github.com/Skux4life'>GitHub</a> or connect with me on <a href='https://www.linkedin.com/in/matt-ellis-3157101b8/'>LinkedIn</a>.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
