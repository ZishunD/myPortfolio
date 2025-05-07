import { useState } from 'react';

const ProgressBar = ({ level }) => {
    const width = {
        Beginner: 'w-1/4',
        Intermediate: 'w-1/2',
        Advanced: 'w-3/4',
        Expert: 'w-full',
        Native: 'w-full'
    }[level];

    const color = {
        Beginner: 'bg-red-400',
        Intermediate: 'bg-yellow-400',
        Advanced: 'bg-green-500',
        Expert: 'bg-blue-600',
        Native: 'bg-blue-600',
    }[level];

    return (
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full ${width} ${color} rounded-full transition-all duration-300`} />
        </div>
    );
};

const Dropdown = ({ label, skills }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full mb-4">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
                {label}
                <svg
                    className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="mt-2 p-4 w-full bg-gray-50 border border-gray-200 rounded-md shadow-sm">
                    <ul className="space-y-4 text-sm">
                        {skills.map(({ name, level }) => (
                            <li key={name}>
                                <div className="flex justify-between mb-1">
                                    <span>{name}</span>
                                    <span className="text-gray-500">{level}</span>
                                </div>
                                <ProgressBar level={level.charAt(0).toUpperCase() + level.slice(1)} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const Skills = () => {
    return (
        <div className="skills font-serif mx-4 lg:mx-[10vw] my-6 lg:my-[5vh]" id='skills'>
            <div className="title text-xl font-bold mb-4 text-center lg:text-left">Technical Skills</div>
            <div className="flex flex-col w-full">
                <Dropdown
                    label="Programming Languages"
                    skills={[
                        { name: 'Java', level: 'intermediate' },
                        { name: 'Python', level: 'intermediate' },
                        { name: 'Go', level: 'beginner' },
                    ]}
                />
                <Dropdown
                    label="Frontend Technologies"
                    skills={[
                        { name: 'HTML', level: 'intermediate' },
                        { name: 'CSS', level: 'intermediate' },
                        { name: 'Tailwind CSS', level: 'beginner' },
                        { name: 'JavaScript', level: 'intermediate' },
                        { name: 'React', level: 'intermediate' },
                    ]}
                />
                <Dropdown
                    label="Backend Frameworks"
                    skills={[
                        { name: 'Spring Boot', level: 'beginner' },
                        { name: 'Node.js', level: 'intermediate' },
                        { name: 'Flask', level: 'intermediate' },
                    ]}
                />
                <Dropdown
                    label="Databases"
                    skills={[
                        { name: 'MySQL', level: 'intermediate' },
                        { name: 'MongoDB', level: 'intermediate' },
                        { name: 'PostgreSQL', level: 'beginner' },
                    ]}
                />
                <Dropdown
                    label="Additional Skills"
                    skills={[
                        { name: 'Docker', level: 'beginner' },
                        { name: 'Agile Development', level: 'beginner' },
                        { name: 'Public Speaking', level: 'intermediate' },
                    ]}
                />
                <Dropdown
                    label="Language Skills"
                    skills={[
                        { name: 'English', level: 'Advanced' },
                        { name: 'Chinese', level: 'Native' },
                    ]}
                />
            </div>
        </div>
    );
};

export default Skills;

