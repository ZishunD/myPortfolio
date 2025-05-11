const projectData = [
    {
        title: "Mode Track APIs",
        date: "Apr. 2025",
        description: "Built a cloud-ready RESTful API for emotion tracking.",
        skills: ["Go", "Fiber", "GORM", "PostgreSQL", "Docker", "Render"],
        image: "/modTracker.png",
        link: "https://github.com/ZishunD/mood-tracker",
    },
    {
        title: "Password Generator",
        date: "Mar. 2025",
        description:
            "Developed a password generator supporting CLI and web modes. Implemented customizable password length, complexity, and generation history.",
        skills: ["Python", "Flask", "Tailwindcss", "Docker", "Render"],
        image: "/pygen.png",
        link: "https://pypassgen.onrender.com/",
    },
    {
        title: "Senior Project (Siam Trip)",
        date: "Sep. 2024 - Apr. 2025",
        description:
            "A travel app designed for Chinese tourists in Thailand, offering features like travel plan sharing, location filters, and translation assistance.",
        skills: ["WXML", "WXSS", "Javascript", "Node.js", "MongoDB", "Render", "Google Cloud APIs"],
        image: "/senior.png",
        link: "https://github.com/donaldsevegoth0/siamTrip",
    },
    {
        title: "Searching System for Pokémon Info",
        date: "Dec. 2023",
        description: "Developed a fast and scalable search engine for Pokémon information using ElasticSearch.",
        skills: ["ElasticSearch", "Node.js", "JavaScript", "JSON", "REST API"],
        image: "/pokemonSearch.png",
        link: "https://github.com/ZishunD/searchForPokemon",
    },
    {
        title: "🔐 Safe Email",
        date: "Feb. 2025",
        description: "A hybrid encryption demo simulating secure email communication using RSA and AES. Built with Flask and Docker to demonstrate data confidentiality in transit.",
        skills: ["Flask", "Python", "RSA", "AES", "Cryptography", "Docker"],
        image: "/safeEmail.jfif",
        link: "https://github.com/ZishunD/SafeEmail",
    },
    {
        title: "📚 ReactBook",
        date: "Jan. 2025",
        description: "A minimal digital bookshelf built with React and Tailwind CSS CDN. Browse and search books with zero backend.",
        skills: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
        image: "/reactBook.png",
        link: "https://reactbook-wqqx.onrender.com/",
    }
];

const Projects = () => {
    return (
        <div className="projects font-serif mx-[10vw]" id="projects">
            <div className="title text-2xl font-bold mb-6">Projects</div>
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 flex-nowrap w-max">
                    {projectData.map((project, i) => (
                        <div
                            key={i}
                            className="w-[80vw] lg:w-[25vw] flex-shrink-0 rounded overflow-hidden shadow-lg bg-white snap-start transition-all duration-500 ease-in-out"
                        >
                            <img
                                className="w-full h-40 object-cover"
                                src={project.image}
                                alt={project.title}
                            />
                            <div className="px-6 py-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-xl mb-1 text-blue-600 hover:underline"
                                >
                                    {project.title}
                                </a>
                                <p className="text-sm text-gray-500 mb-2">{project.date}</p>
                                <p className="text-gray-700 text-base mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                                        >
                                            #{skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

