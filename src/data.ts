export const coreCompetencies = ['HTML5', 'CSS3', 'TypeScript', 'Tailwind CSS', 'React'];

export const education = ['B.S. Computer Science @ Texas State University'];

export const experience = ['AI Model Tester and Validation Analyst @ Stellar AI'];

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
        detail: 'Open to frontend and full-stack roles, building accessible, WCAG-compliant interfaces while expanding into back end architecture and cloud deployment.'
    }
];

export const projectInformationOne = [
    {
        image: '/loopStudiosDesktop.png',
        link: 'https://loop-studios-landing-page-kohl.vercel.app/',
        heading: 'LoopStudios Landing Page',
        description: 'An animation-driven landing page that showcases VR technology. Crafted with React to organize contents of the page into functional components, Tailwind CSS to enhance type-writer effects via the theme directive, and TypeScript for static typing.',
        source: 'https://github.com/JoshuaM04/LoopStudios-Landing-Page',
        tools: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
        image: '/tipCalculatorDesktop.png',
        link: 'https://tip-calculator-app-brown-three.vercel.app/',
        heading: 'Tip Calculator App',
        description: 'A web application powered by React that uses useState() React hooks to store any active states (e.g. the tip button option that is selected). Furthermore, it utilizes a modular approach to organizing the parts of the webpage into different functional components.',
        source: 'https://github.com/JoshuaM04/Tip-Calculator-App',
        tools: ['React', 'JavaScript', 'Tailwind CSS']
    },
    {
        image: '/contactFormDesktop.png',
        link: 'https://contact-form-eosin-psi.vercel.app/',
        heading: 'Contact Form',
        description: 'A interative contact form using custom-built regex classifications for user input. This customized approach allows dynamic styling for error states pertaining to input fields. Furthermore, the application is powered by React.',
        source: 'https://github.com/JoshuaM04/Contact-Form',
        tools: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
        image: '/timeTrackingDashboardDesktop.png',
        link: 'https://time-tracking-dashboard-zeta-plum.vercel.app/',
        heading: 'Time Tracking Dashboard',
        description: 'A multi-component web application that features a responsive design, allowing the components to be organized differently within a grid. The information showcased is dynamically rendered to the webpage via user input when selecting an option such as \'Daily\', \'Weekly\', or \'Monthly\' which is fetched from an external data.json file.',
        source: 'https://github.com/JoshuaM04/Time-Tracking-Dashboard',
        tools: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
        image: '/newsHomepageDesktop.png',
        link: 'https://news-homepage-seven-sooty.vercel.app/',
        heading: 'News Homepage',
        description: 'A website application that showcases sections tailored to different types of media. The application applies a unique navigation menu on mobile resolutions which uses a modal pop-up which is activated via user-input and a navigation list on desktop resolutions.',
        source: 'https://github.com/JoshuaM04/News-Homepage',
        tools: ['HTML5', 'CSS3']
    },
    {
        image: '/interactiveRatingComponentDesktop.png',
        link: 'https://interactive-rating-component-azure-seven.vercel.app/',
        heading: 'Interactive Rating Component',
        description: 'An interactive rating component that uses React to store the rating via user-input. The rating is determined by user-selection amongst an array of buttons that are rendered via a .map() callback function. Upon submission, the state variable that contains the rating is then displayed to the user in a pop-over dialog.',
        source: 'https://github.com/JoshuaM04/Interactive-Rating-Component',
        tools: ['React', 'TypeScript', 'Tailwind CSS']
    }
];

export const projectInformationTwo = [
    {
        image: '/carpentry-hero.webp',
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
