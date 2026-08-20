export const coreCompetencies = ['HTML5', 'CSS3', 'TypeScript', 'Tailwind CSS', 'React'];

/**
 * The wider toolset, kept separate from coreCompetencies so the five headline
 * skills stay the headline. Deliberately excludes anything already listed
 * there, since repeating them would flatten that distinction.
 */
export const toolsAndTechnologies = [
    'Sass',
    'React Router',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Vercel',
    'Figma'
];

/**
 * Education, laid out as the resume does it: institution and location on the
 * first line, degree and graduation on the second.
 */
export const education = [
    {
        institution: 'Texas State University',
        location: 'San Marcos, TX',
        degree: 'B.S. in Computer Science',
        detail: 'Graduation Date: December 2025',
        awards: ['National Society of Collegiate Scholars', 'Phi Theta Kappa', "Dean's List"]
    }
];

/*
 * The resume modal's experience block reads from workExperience below rather
 * than a second copy of the same role, so the title, period and location cannot
 * drift between the modal and the experience section.
 */

/** Rails that run across the page as ticker strips. */
export const marqueeItems = [
    'Interactive',
    'Responsive',
    'Accessible',
    'Software Engineer',
    'Frontend Developer',
];

/** Milestones for the overview timeline, oldest first. */
export const timeline = [
    {
        period: 'January 2025 — February 2026',
        title: 'AI Model Tester and Validation Analyst',
        detail: 'Evaluated agentic AI models across multiple test sessions at Stellar AI, authoring tailored task instructions and scoring outputs against defined success criteria to raise measured task accuracy by 18%, and documenting reproducible failure scenarios that improved AI-driven issue resolution by 20%.'
    },
    {
        period: 'December 2025',
        title: 'B.S. Computer Science',
        detail: 'Graduated from Texas State University.'
    },
    {
        period: 'May 2026 — Present',
        title: 'MERN stack e-commerce app',
        detail: 'Engineered a full-stack MERN application with dynamic REST API routing for product-isolated reviews, Stripe Checkout payment sessions, and Multer with Vercel Blob for cloud-hosted media. Deployed as a unified monorepo on Vercel with serverless API rewrites and SPA fallback routing.'
    },
    {
        period: 'Now',
        title: 'Looking for opportunities',
        detail: 'Primarily a frontend developer, building accessible, WCAG-compliant interfaces, and expanding into back end architecture and full-stack development.'
    }
];

export const projectInformationOne = [
    {
        image: '/images/projects/loop-studios.png',
        link: 'https://loop-studios-landing-page-kohl.vercel.app/',
        heading: 'LoopStudios Landing Page',
        description: 'An animation-driven landing page that showcases VR technology. Crafted with React to organize contents of the page into functional components, Tailwind CSS to enhance type-writer effects via the theme directive, and TypeScript for static typing.',
        source: 'https://github.com/JoshuaM04/LoopStudios-Landing-Page',
        tools: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
        image: '/images/projects/tip-calculator.png',
        link: 'https://tip-calculator-app-brown-three.vercel.app/',
        heading: 'Tip Calculator App',
        description: 'A web application powered by React that uses useState() React hooks to store any active states (e.g. the tip button option that is selected). Furthermore, it utilizes a modular approach to organizing the parts of the webpage into different functional components.',
        source: 'https://github.com/JoshuaM04/Tip-Calculator-App',
        tools: ['React', 'JavaScript', 'Tailwind CSS']
    },
    {
        image: '/images/projects/contact-form.png',
        link: 'https://contact-form-eosin-psi.vercel.app/',
        heading: 'Contact Form',
        description: 'A interative contact form using custom-built regex classifications for user input. This customized approach allows dynamic styling for error states pertaining to input fields. Furthermore, the application is powered by React.',
        source: 'https://github.com/JoshuaM04/Contact-Form',
        tools: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
        image: '/images/projects/time-tracking-dashboard.png',
        link: 'https://time-tracking-dashboard-zeta-plum.vercel.app/',
        heading: 'Time Tracking Dashboard',
        description: 'A multi-component web application that features a responsive design, allowing the components to be organized differently within a grid. The information showcased is dynamically rendered to the webpage via user input when selecting an option such as \'Daily\', \'Weekly\', or \'Monthly\' which is fetched from an external data.json file.',
        source: 'https://github.com/JoshuaM04/Time-Tracking-Dashboard',
        tools: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
        image: '/images/projects/news-homepage.png',
        link: 'https://news-homepage-seven-sooty.vercel.app/',
        heading: 'News Homepage',
        description: 'A website application that showcases sections tailored to different types of media. The application applies a unique navigation menu on mobile resolutions which uses a modal pop-up which is activated via user-input and a navigation list on desktop resolutions.',
        source: 'https://github.com/JoshuaM04/News-Homepage',
        tools: ['HTML5', 'CSS3']
    },
    {
        image: '/images/projects/interactive-rating-component.png',
        link: 'https://interactive-rating-component-azure-seven.vercel.app/',
        heading: 'Interactive Rating Component',
        description: 'An interactive rating component that uses React to store the rating via user-input. The rating is determined by user-selection amongst an array of buttons that are rendered via a .map() callback function. Upon submission, the state variable that contains the rating is then displayed to the user in a pop-over dialog.',
        source: 'https://github.com/JoshuaM04/Interactive-Rating-Component',
        tools: ['React', 'TypeScript', 'Tailwind CSS']
    }
];

export const projectInformationTwo = [
    {
        image: '/images/projects/carpentry-hero.webp',
        link: 'https://woodwork-creations.com/',
        heading: 'WoodWork Creations',
        description: 'Engineered a full-stack MERN e-commerce application for a family-run furniture business, with dynamic REST API routing for product-isolated user reviews, Multer and Vercel Blob for cloud-hosted media uploads, and the Stripe Checkout API processing catalog attributes and prices into secure payment sessions. Deployed as a unified monorepo on Vercel with serverless API rewrites, SPA fallback routing, and AI-assisted backend middleware optimization.',
        source: 'https://github.com/JoshuaM04/carpentry-website',
        tools: ['MongoDB', 'Express.JS', 'React', 'Node.JS', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Multer', 'Vercel']
    }
];

export const workExperience = [
    {
        company: 'Stellar AI',
        role: 'AI Model Tester and Validation Analyst',
        period: 'January 2025 — February 2026',
        location: 'Remote',
        summary: [
            'Evaluated agentic AI models across multiple test sessions, authoring tailored task instructions and scoring outputs against defined success criteria to raise measured task accuracy by 18%.',
            'Analyzed sample batches and documented reproducible failure scenarios, improving AI-driven GitHub issue resolution speed and accuracy by 20%.',
            'Authored technical specifications for 10+ GitHub issues, enabling AI models to reliably reproduce complex virtualized-environment bugs and streamline automated troubleshooting.'
        ]
    }
];

export const contactDetails = [
    { label: 'Email', value: 'joshmartinezny08@gmail.com', href: 'mailto:joshmartinezny08@gmail.com' },
    { label: 'Phone', value: '+1 737-213-6739', href: 'tel:+17372136739' },
    { label: 'Location', value: 'San Marcos, TX', href: null }
];

export const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/JoshuaM04' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshua-martinez-1aa853212/' }
];
