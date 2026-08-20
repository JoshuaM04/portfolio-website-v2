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
        category: 'Landing Page',
        year: '2025',
        description: 'An animation-driven landing page that showcases VR technology. Crafted with React to organize contents of the page into functional components, Tailwind CSS to enhance type-writer effects via the theme directive, and TypeScript for static typing.',
        source: 'https://github.com/JoshuaM04/LoopStudios-Landing-Page',
        tools: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
        image: '/tipCalculatorDesktop.png',
        link: 'https://tip-calculator-app-brown-three.vercel.app/',
        heading: 'Tip Calculator App',
        category: 'Web Application',
        year: '2025',
        description: 'A web application powered by React that uses useState() React hooks to store any active states (e.g. the tip button option that is selected). Furthermore, it utilizes a modular approach to organizing the parts of the webpage into different functional components.',
        source: 'https://github.com/JoshuaM04/Tip-Calculator-App',
        tools: ['React', 'JavaScript', 'Tailwind CSS']
    },
    {
        image: '/contactFormDesktop.png',
        link: 'https://contact-form-eosin-psi.vercel.app/',
        heading: 'Contact Form',
        category: 'Form Validation',
        year: '2025',
        description: 'A interative contact form using custom-built regex classifications for user input. This customized approach allows dynamic styling for error states pertaining to input fields. Furthermore, the application is powered by React.',
        source: 'https://github.com/JoshuaM04/Contact-Form',
        tools: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
        image: '/timeTrackingDashboardDesktop.png',
        link: 'https://time-tracking-dashboard-zeta-plum.vercel.app/',
        heading: 'Time Tracking Dashboard',
        category: 'Dashboard',
        year: '2024',
        description: 'A multi-component web application that features a responsive design, allowing the components to be organized differently within a grid. The information showcased is dynamically rendered to the webpage via user input when selecting an option such as \'Daily\', \'Weekly\', or \'Monthly\' which is fetched from an external data.json file.',
        source: 'https://github.com/JoshuaM04/Time-Tracking-Dashboard',
        tools: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
        image: '/newsHomepageDesktop.png',
        link: 'https://news-homepage-seven-sooty.vercel.app/',
        heading: 'News Homepage',
        category: 'Editorial Layout',
        year: '2024',
        description: 'A website application that showcases sections tailored to different types of media. The application applies a unique navigation menu on mobile resolutions which uses a modal pop-up which is activated via user-input and a navigation list on desktop resolutions.',
        source: 'https://github.com/JoshuaM04/News-Homepage',
        tools: ['HTML5', 'CSS3']
    },
    {
        image: '/interactiveRatingComponentDesktop.png',
        link: 'https://interactive-rating-component-azure-seven.vercel.app/',
        heading: 'Interactive Rating Component',
        category: 'UI Component',
        year: '2024',
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
        category: 'E-Commerce Platform',
        year: '2026',
        description: 'An E-Commerce website utilizing the MERN tech stack. This website hosts a catalog of hand-made furniture items that are apart of a family-run business and utilizes the Stripe API for payment processing. The backend utilizes dynamic routing for each catalog page to host reviews unique to each catalog item that is stored in the database.',
        source: 'https://github.com/JoshuaM04/carpentry-website',
        tools: ['MongoDB', 'Express.JS', 'React', 'Node.JS', 'TypeScript', 'Tailwind CSS', 'Stripe API']
    }
];

export const workExperience = [
    {
        company: 'Stellar AI',
        role: 'AI Model Tester and Validation Analyst',
        period: 'January 2025 — February 2026',
        location: 'Remote',
        summary: [
            'Executed performance and accuracy evaluations on machine learning models using Python, boosting model accuracy by 15%, and analyzed sample batches to document reproducible scenarios that improved AI-driven GitHub issue resolution speed and accuracy by 20%.',
            'Authored detailed technical specifications for 10+ GitHub issues, enabling AI models to reliably reproduce complex virtualized-environment bugs and streamline automated troubleshooting workflows.'
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
