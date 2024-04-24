import {
	frontend,
	backend,
	ux,
	prototyping,
	javascript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	git,
	postman,
	mongoDb,
	bootstrap,
	express,
	http,
	linux,
	restApi,
	mui,
	neoDove,
	hyperDizital,
	Mill,
	Qtify,
	Qkart,
	YTclone,
	IGstudio,
	Qtrip,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend Developer",
		icon: frontend,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},

	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Material UI",
		icon: mui,
	},

	{
		name: "git",
		icon: git,
	},
	{
		name: "Postman",
		icon: postman,
	},
	{
		name: "MongoDB",
		icon: mongoDb,
	},
	{
		name: "BootStrap",
		icon: bootstrap,
	},
	{
		name: "ExpressJs",
		icon: express,
	},
	{
		name: "HTTP",
		icon: http,
	},
	{
		name: "Linux",
		icon: linux,
	},
	{
		name: "RestApi",
		icon: restApi,
	},
];

const experiences = [
	{
		title: "Customer Success Intern ",
		company_name: "NeoDove",
		icon: neoDove,
		iconBg: "#333333",
		date: "June 2021 - Dec 2022",
	},
	{
		title: "React-Native/React Developer",
		company_name: "HyperDizital",
		icon: hyperDizital,
		iconBg: "#333333",
		date: "Feb 2022 - June 2022",
	},
	{
		title: "Frontend-Developer",
		company_name: "MillionSquareFeet",
		icon: Mill,
		iconBg: "#333333",
		date: "June 2022 - Jan 2023",
	},
];

const projects = [
	{
		id: "project-1",
		name: "Qtify",
		description: "A app similar to spotify",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "Material Ui",
				color: "pink-text-gradient",
			},
		],
		image: Qtify,
		repo: "https://github.com/Slayer-Wolf/L-square-QTify",
		demo: "https://qtify-darshan.vercel.app/",
	},
	{
		id: "project-2",
		name: "Qkart",
		description: "A shopping website to shop for products",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "Material Ui",
				color: "pink-text-gradient",
			},
		],
		image: Qkart,
		repo: "https://github.com/Slayer-Wolf/jhammer228-ME_QKART_FRONTEND_V2",
		demo: "https://qkart-frontend-plum.vercel.app/",
	},
	{
		id: "project-3",
		name: "YTclone",
		description: "A clone of Youtube",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Material UI",
				color: "blue-text-gradient",
			},
			{
				name: "RestApi",
				color: "pink-text-gradient",
			},
		],
		image: YTclone,
		repo: "https://github.com/Slayer-Wolf/YoutubeClone",
		demo: "https://youtube-cl1one.netlify.app/",
	},
	{
		id: "project-4",
		name: "IGstudio",
		description: `Landing Page for a Law Firm`,
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "MaterialUI",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: IGstudio,
		repo: "https://github.com/Slayer-Wolf/IGStudio-Darshan",
		demo: "https://ig-studio-darshan.vercel.app/",
	},
	{
		id: "project-5",
		name: "Qtrip",
		description:
			"Demo Webiste for booking trips and travel location hotels and resort",
		tags: [
			{
				name: "Html",
				color: "blue-text-gradient",
			},
			{
				name: "Js",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: Qtrip,
		repo: "https://github.com/CrioDo/jhammer228-ME_QTRIPDYNAMIC",
		demo: "https://darshanqtripfrontend.netlify.apphttps://github.com/CrioDo/jhammer228-ME_QTRIPDYNAMIC/",
	},
];

export { services, technologies, experiences, projects };
