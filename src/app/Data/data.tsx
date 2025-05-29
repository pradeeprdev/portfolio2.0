import Ideamaze from '../../../public/ideamaze.png'
import tableMaster from '../../../public/tablemaster.jpeg'
import blockchain from '../../../public/blockchain.png'
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LanguageIcon from '@mui/icons-material/Language';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const aboutItems = [
    { name: 'Name', description: 'Pradeep Rawat'},
    { name: 'Address', description: 'Gwalior, India'},
    { name: 'Email', description: 'pradeeprawat1717@gmail.com'},
    { name: 'Phone', description: '+91-89827-48401'},
    { name: 'Twitter', description: 'pradeepraawat'},
]

export const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#resume" },
    { name: "Services", link: "#services" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

export const resumeItems = [
    { duration: "May 2025 - Present", title: "MERN Stack Developer", organization: "JPLoft", description: "Developing full-stack web applications using the MERN stack. Focused on building responsive UIs, integrating RESTful APIs, and optimizing performance. Collaborating with the backend team to deliver scalable, user-friendly features."},
    { duration: "February 2025 - March 2025", title: "Full Stack Developer", organization: "Slashash", description: "Engineered a Python script leveraging prompt engineering for real-time MySQL-to-ClickHouse data migration via Kafka and Debezium, reducing sync time by 40%"},
    { duration: "September 2024 - January 2025", title: "Jr. Data Engineer", organization: "64 Sqares", description: "Worked on data engineering tasks, optimizing customer interaction prompts, integrating APIs for seamless data flow, and automating processes with Python scripting."},
    { duration: "January 2024 - August 2024", title: "Software Developer Intern", organization: "Stratbeans", description: "Fixed 100+ critical bugs in the Byrecasting Application, resulting in a 20% reduction in user-reported issues"},
    { duration: "July 2023 - August 2023", title: "Software Developer Intern", organization: "Tech Superior Consulting", description: "Improved website conversion rate by 10% through the development of a new contact page with API integration."},
    { duration: "2020-2024", title: "Bachelor of Technology (B.Tech)", organization: "Amity University Madhya Pradesh", description: "Earned a B.Tech degree with a focus on Computer Science, developing a strong foundation in software development and engineering principles."},
];

export const servicieItems = [
    {icon: "web", title: "Web Developement"},
    {icon: "app", title: "App Developement"},
    {icon: "design", title: "Graphic Design"},
]

interface SkillItem {
    name: string;
    rating: number;
}
  
export const skillItems = [
    {name: "React JS", rating: "9"},
    {name: "Node.js", rating: "8"},
    {name: "Express.js", rating: "8"},
    {name: "MongoDB", rating: "8"},
    {name: "Next JS", rating: "7"},
    {name: "TypeScript", rating: "7"},
    {name: "APIs", rating: "9"},
    {name: "Version Control", rating: "8"},
    {name: "Tailwind CSS", rating: "9"},
]

export const totalProjects = '12';

export const projectItems = [
    {name: "Ideamaze", category: "Web Development", image: Ideamaze, url: ''},
    {name: "Table Master", category: "Web Development", image: tableMaster},
    {name: "D-vote", category: "Blockchain", image: blockchain},
]

export const highlightItems = [
    {name: 'Satisfied Clients', count: 10, isPlus: true},
    {name: 'Client Retention Rate', count: 95, isPlus: true},
    {name: 'Skilled Team Members', count: 5, isPlus: false},
    {name: 'Active Projects', count: 3, isPlus: false},
]

export const contactItems = [
    {name: 'Address', description: 'Gwalior, India', icon: HomeIcon},
    {name: 'Contact Number', description: '+91 8982748401', icon: PhoneEnabledIcon},
    {name: 'Email Address', description: 'pradeeprawat1717@gmail.com', icon: EmailIcon},
    {name: 'Website', description: 'https://pradeeprawat.vercel.app', icon: LanguageIcon},
]

export const footerItems = [
    {name: 'About', 
        subItems : [
            {name: 'About Eager to leverage technical skills and problem-solving abilities to contribute to innovative projects in a fast-paced environment.', icon: ''},
        ],
        socialProfiles : [
            {name: 'X', url: 'https://x.com/i_pradeep_rawat', icon: XIcon},
            {name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100013147477974', icon: FacebookIcon},
            {name: 'Instagram', url: 'https://www.instagram.com/ipradeepraawat', icon: InstagramIcon},
        ],
    },
    {name: 'Links',
        subItems : [
            {name: 'Home', url: 'Home', icon: ArrowRightAltIcon},
            {name: 'About', url: 'About', icon: ArrowRightAltIcon},
            {name: 'Services', url: 'Services', icon: ArrowRightAltIcon},
            {name: 'Contanct', url: 'Contanct', icon: ArrowRightAltIcon},
        ],
    },
    {name: 'Services',
        subItems : [
            {name: 'Web Design', url: 'Services', icon: ArrowRightAltIcon},
            {name: 'Web Development', url: 'Services', icon: ArrowRightAltIcon},
            {name: 'Business Strategy', url: 'Services', icon: ArrowRightAltIcon},
            {name: 'Data Analysis', url: 'Services', icon: ArrowRightAltIcon},
            {name: 'Graphic Design', url: 'Services', icon: ArrowRightAltIcon},
        ],
    },
    {name: 'Have a Questions?',
        subItems : [
            {name: 'Gwalior, India', url: 'About', icon: LocationOnIcon},
            {name: '+91 8982748401', url: 'About', icon: PhoneEnabledIcon},
            {name: 'https://pradeeprawat.vercel.app', url: 'About', icon: EmailIcon},
        ],
    },
]