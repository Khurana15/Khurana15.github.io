// =============================================================================
// THE ONLY FILE YOU NEED TO EDIT.
//
// Every page on this site is generated from what's below. Add a publication
// here and it appears on the Research page. Change a title here and it changes
// everywhere. Nothing is typed into the pages themselves.
//
// To update your CV: replace public/cv.pdf with the new file. Keep the name
// exactly "cv.pdf" — the link never changes, so it can never go stale.
// =============================================================================

export const person = {
  name: "Indu Khurana",
  credential: "Ph.D.",
  // The one-line version of what you do. Shown large on the homepage.
  tagline: "I study how institutions and context shape who becomes an entrepreneur, and early stage firm dynamics.",
  titles: [
    "Associate Professor of Economics and Business, Hampden-Sydney College",
    "Senior Research Fellow, Institute for Development Strategies, Indiana University Bloomington",
  ],
  email: "ikhurana@hsc.edu",
  // Set to null to keep your phone number off the site.
  phone: null as string | null,
  office: "Gilmer 218, Hampden-Sydney College, Hampden-Sydney, VA",
  cv: "/cv.pdf",
  // Put a headshot at public/photo.jpg and set this to "/photo.jpg".
  // Leave it null and the homepage lays out without a photo.
  photo: "/photo.jpg" as string | null,
};

// Indu's own wording, from her previous site and CV. Facts updated (current
// title, the Indiana fellowship, the Small Business Economics editorship);
// the phrasing is hers. Don't rewrite it.
export const bio = [
  `I am an Associate Professor of Economics and Business at Hampden-Sydney College in Virginia
   and a Senior Research Fellow at the Institute for Development Strategies at Indiana University
   Bloomington. I completed my PhD in Economics with an entrepreneurship specialization from
   Florida International University, along with a Master of Philosophy and Master of Commerce
   from the Delhi School of Economics.`,
  `My research focuses on how institutional and individual contexts shape entrepreneurial
   behavior, examining macro-level forces, such as social welfare programs, policy
   uncertainty, and geopolitical uncertainty, alongside micro-level decision-making shaped by factors like time availability,
   gender, religion, education and socioeconomic background.`,
  `I serve as Editor at Small Business Economics and as Chair of the Teaching Committee for the
   Entrepreneurship Division at the Academy of Management, wherein I organize entrepreneurship
   pedagogy-focused events, connecting scholars and practitioners worldwide.`,
];

export const researchAreas = [
  "Entrepreneurship",
  "Strategy",
  "Entrepreneurial Ecosystems",
  "Institutions & Policy",
  "Gender & Entrepreneurship",
  "AI & Entrepreneurship",
];

export const education = [
  { year: "2012", degree: "Ph.D., Economics", school: "Florida International University, Miami, Florida" },
  { year: "2009", degree: "M.A., Economics", school: "Florida International University, Miami, Florida" },
  { year: "2007", degree: "M.Phil., Commerce", school: "Delhi School of Economics, University of Delhi, India" },
  { year: "2003", degree: "M.Com., Commerce", school: "Delhi School of Economics, University of Delhi, India" },
  { year: "2001", degree: "B.Com. (Honors)", school: "Sri Guru Gobind Singh College of Commerce, University of Delhi, India" },
];

export const editorial = [
  { years: "2026–", role: "Editor", venue: "Small Business Economics" },
  { years: "2021–2026", role: "Editorial Review Board", venue: "Small Business Economics" },
  { years: "2024–", role: "Editorial Advisory Board", venue: "Journal of Asia Business Studies" },
  { years: "2023–2026", role: "Guest Editor", venue: "Frontiers in Behavioral Economics, Special Issue on “Decision making under risk and ambiguity”" },
];

export const links = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=_bqxG9sAAAAJ&hl=en" },
  { label: "ORCID", href: "https://orcid.org/0000-0002-1978-6379" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Indu-Khurana" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/indu-khurana-586042b/" },
  { label: "X", href: "https://x.com/ikhurana15" },
];

// -----------------------------------------------------------------------------
// PUBLICATIONS — newest first. To add one, copy a line and edit it.
// `note` is optional; use it for awards and recognition.
// -----------------------------------------------------------------------------

export type Article = {
  year: string;
  authors: string;
  title: string;
  venue: string;
  note?: string;
};

export const articles: Article[] = [
  {
    year: "2026",
    authors: "Khurana, I., Lee, D. J., & De Castro, J.",
    title: "The Impact of Workers’ Compensation Laws on Entrepreneurial Activity",
    venue: "Strategic Entrepreneurship Journal",
  },
  {
    year: "2025",
    authors: "Dutta, D. K., & Khurana, I.",
    title: "Orchestrating entrepreneurial ecosystems through transactive memory systems: a learning-based framework",
    venue: "Small Business Economics",
  },
  {
    year: "2024",
    authors: "Khurana, I., & Dutta, D. K.",
    title: "The impact of product portfolio specialty and activeness on firm survival: evidence from the nascent drone industry",
    venue: "R&D Management",
  },
  {
    year: "2024",
    authors: "Audretsch, D. B., Khurana, I., Dutta, D. K., & Tamvada, J. P.",
    title: "Creating Effective University Innovation and Entrepreneurial Ecosystems: A Commitment System Perspective",
    venue: "Journal of Technology Transfer",
  },
  {
    year: "2023",
    authors: "Dutta, D. K., & Khurana, I.",
    title: "Productive entrepreneurship within the entrepreneurial ecosystem: Insights from social exchange theory",
    venue: "Applied Psychology",
  },
  {
    year: "2023",
    authors: "Khurana, I., Tamvada, J. P., & Audretsch, D. B.",
    title: "The Weaker Sex? A Tale of Means and Tails",
    venue: "Journal of Business Venturing Insights",
  },
  {
    year: "2023",
    authors: "Khurana, I., Habiyaremye, A., Avsar, V., & Terjesen, S.",
    title: "The Impact of Policy Uncertainty on Entrepreneurial Activity: A Cross-country Study",
    venue: "Entrepreneurship and Regional Development",
  },
  {
    year: "2023",
    authors: "Khurana, I., & Dutta, D. K.",
    title: "From Place to Space: The Role of Entrepreneurs and Place-Based Enterprises in Building Sustainable Smart Cities",
    venue: "Small Business Economics",
  },
  {
    year: "2022",
    authors: "Khurana, I., Dutta, D. K., & Ghura, A. S.",
    title: "SMEs and Digital Transformation During a Crisis: The Emergence of Resilience as a Second-order Dynamic Capability in an Entrepreneurial Ecosystem",
    venue: "Journal of Business Research",
    note: "Top 5 most cited papers of 2022 on Entrepreneurial Ecosystems",
  },
  {
    year: "2022",
    authors: "Khurana, I., & Lee, D. J.",
    title: "Gender Bias in High Stakes Pitching: An NLP Approach",
    venue: "Small Business Economics",
  },
  {
    year: "2022",
    authors: "Khurana, I., Dutta, D. K., & Schenkel, M. T.",
    title: "Crisis and Arbitrage Opportunities: The Role of Causation, Effectuation, and Entrepreneurial Learning",
    venue: "International Small Business Journal",
  },
  {
    year: "2021",
    authors: "Khurana, I., & Dutta, D. K.",
    title: "From latent to emergent entrepreneurship in innovation ecosystems: The role of entrepreneurial learning",
    venue: "Technological Forecasting and Social Change",
  },
  {
    year: "2021",
    authors: "Khurana, I., Ghura, A. S., & Dutta, D. K.",
    title: "The influence of religion on the humane orientation of entrepreneurs",
    venue: "Journal of Small Business Management",
  },
  {
    year: "2021",
    authors: "Khurana, I., & Farhat, J.",
    title: "The Role of Resources in Timing of Diversification and Survival of Startup Firms",
    venue: "Industry and Innovation",
  },
  {
    year: "2021",
    authors: "Carmen, C., Farhat, J., & Khurana, I.",
    title: "Does Policy Uncertainty Impact the M&A Exit of Startup Firms?",
    venue: "Journal of Economics and Finance",
  },
  {
    year: "2021",
    authors: "Khurana, I.",
    title: "Legitimacy and Reciprocal Altruism in Donation-Based Crowdfunding: Evidence from India",
    venue: "Journal of Risk and Financial Management",
  },
  {
    year: "2021",
    authors: "Khurana, I., Ghura, A. S., & Dutta, D. K.",
    title: "Religion and humane entrepreneurship: Insights for research, policy, and practice",
    venue: "Journal of the International Council for Small Business",
  },
  {
    year: "2020",
    authors: "Khurana, I.",
    title: "Understanding the process of knowledge accumulation and entrepreneurial learning in startups",
    venue: "Industry and Innovation",
  },
  {
    year: "2020",
    authors: "Nicholas, T., Musoba, G., & Khurana, I.",
    title: "The Power of a Promise: Dual Admission for Community College-to-University Transfer Students",
    venue: "Community College Journal of Research and Practice",
  },
  {
    year: "2020",
    authors: "Khurana, I., Krichevskiy, D., Dempster, G., & Stimpson, S.",
    title: "Institutions, entrepreneurial adaptation, and the legal form of the organization",
    venue: "Journal of Entrepreneurship and Public Policy",
  },
  {
    year: "2020",
    authors: "Khurana, I., & Carson, B.",
    title: "Care or Constraints? A New Look at the Welfare of SNAP and WIC Recipients During the COVID-19 Pandemic",
    venue: "Virginia Economic Journal",
  },
];

export const bookChapters: Article[] = [
  {
    year: "2025",
    authors: "Khurana, I., & Dutta, D. K.",
    title: "Learning in entrepreneurial ecosystems: Insights from the 4I Learning Framework",
    venue: "Handbook of Research on Entrepreneurial Learning, pp. 77–90. Edward Elgar Publishing",
  },
];

export const otherPublications = [
  {
    year: "2024",
    title: "Helping Haiti: A New Approach",
    venue: "White paper, September 9",
    href: "",
  },
  {
    year: "2022",
    title: "Economic policy uncertainty and the loss of South Africa’s growth momentum: Can the decline be reversed?",
    venue: "Op-Ed, Daily Maverick, January 11",
    href: "",
  },
];

// Titles are withheld while manuscripts are under review.
export const underReview = [
  { authors: "Khurana, I., Allison, T. H., Kunapuli, R., Lee, D. J., & Renko, M.", venue: "Journal of Business Venturing", status: "Revise and resubmit, second-round revision in preparation" },
  { authors: "Khurana, I., Wood, M. S., & Klein, P. G.", venue: "Strategic Entrepreneurship Journal", status: "Revise and resubmit, first round" },
  { authors: "Sheth, A., & Khurana, I.", venue: "Technological Forecasting and Social Change", status: "Under first-round review" },
];

export const inProgress = [
  { title: "Navigating the Knowledge Breadth–Depth Paradox in Entrepreneurship", authors: "with Packard, M., Tamvada, J. P., & Audretsch, D. B." },
  { title: "When Uncertainty Rises: How Ecosystem Structure Shapes Entrepreneurial Entry", authors: "with Sheth, A." },
  { title: "Orchestrating Sustainable Entrepreneurial Ecosystems", authors: "with Dutta, D., Corbett, A. C., & York, J." },
  { title: "A Gendered Perspective of Moral Violations", authors: "with Lee, D. J." },
  { title: "The Role of Religion in Entrepreneurship", authors: "with Packard, M., & Tamvada, J. P.", note: "Nominated for the Best Responsible Research Paper Award, 2024 SMS Conference" },
  { title: "How Entrepreneurial Ecosystems Shape Startup Exit Under Rising Geopolitical Tension", authors: "with Sheth, A." },
];

// -----------------------------------------------------------------------------
// TEACHING
// -----------------------------------------------------------------------------

// Indu's own wording, from her previous Research page. Don't rewrite it.
export const researchStatement = `My research focuses on how institutional and individual contexts shape entrepreneurial
   behavior, examining macro-level forces, such as social welfare programs, policy
   uncertainty, and geopolitical uncertainty, alongside micro-level decision-making shaped by factors like time availability,
   gender, religion, education and socioeconomic background. Methodologically, my work draws extensively on causal
inference, including difference-in-differences, event-study designs, fixed-effects models,
instrumental variables, and matching, as well as longitudinal and panel-data analysis, survival
analysis, and natural-language and text analysis.`;

export const teachingPhilosophy = [
  `My teaching centers on fostering critical thinking, encouraging creativity, and inspiring
   students to engage deeply with the material. I aim for a classroom where students explore
   diverse perspectives and apply what they learn to complex, open-ended problems.`,
];

export const currentCourses = [
  {
    name: "Introduction to Entrepreneurship",
    note: "Certified Experiential Learning course",
    description: "The fundamentals of entrepreneurship: identifying opportunities, understanding the startup process, and launching and managing a new venture.",
  },
  {
    name: "Entrepreneurial Thinking",
    description: "Cultivates an entrepreneurial mindset: approaching problems with creativity, recognizing opportunity, building resilience, and making strategic decisions.",
  },
  {
    name: "Seminar in Business Policy and Strategy",
    note: "Capstone course",
    description: "Integrative capstone in strategic management, drawing together the business curriculum through case analysis and applied strategy work.",
  },
  {
    name: "Intermediate Microeconomics",
    description: "Microeconomic theory in depth: consumer behavior, firm decision-making, market structures, and welfare economics.",
  },
  {
    name: "Financial Accounting and Analysis",
    description: "A comprehensive introduction to financial accounting, focused on interpreting and analyzing financial statements to inform business decisions.",
  },
];

export const previousTeaching = [
  { school: "State University of New York at Oneonta", years: "2016", courses: ["Principles of Economics", "Principles of Macroeconomics", "Principles of Microeconomics"] },
  { school: "Fort Hays State University", years: "2012–2013", courses: ["Quantitative Methods and Statistics (MBA)", "Principles of Microeconomics", "Economic Ideas and Current Issues"] },
  { school: "Florida International University", years: "2009–2010", courses: ["Principles of Macroeconomics", "Principles of Microeconomics"] },
  { school: "University of Delhi", years: "2005–2006", courses: ["Statistics", "Macroeconomics"] },
];

export const mentoring = [
  { year: "2026", student: "Jabez Price ’27", project: "AI and Entrepreneurship" },
  { year: "2025", student: "Walker Stebbings ’26", project: "Changing Landscape of Gig Work in the U.S." },
  { year: "2021", student: "Ethan Badin ’22", project: "Smart City Analysis", note: "Presented at the National Conference on Undergraduate Research" },
  { year: "2020", student: "Brayden Lozaw ’21", project: "Analyzing the Location Choice of Startups", note: "Presented at the National Conference on Undergraduate Research" },
  { year: "2019", student: "Daniel Newberry ’20 and James Mozingo ’20", project: "Analyzing the Phenomenon of Crowdfunding in Entrepreneurship" },
  { year: "2018", student: "Sean Stimpson ’19", project: "Legal structure of start-ups using the Kauffman Firm Survey" },
  { year: "2017", student: "Nicholas Correa ’19", project: "Colombian Peace Treaty and its Impact on Trade Patterns" },
];

export const site = {
  title: "Indu Khurana",
  description:
    "Indu Khurana, Ph.D., Associate Professor of Economics and Business at Hampden-Sydney College and Senior Research Fellow at Indiana University. Research on entrepreneurship, institutions, and policy.",
  url: "https://ikhurana.com",
};
