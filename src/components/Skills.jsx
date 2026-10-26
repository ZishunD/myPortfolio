
import { useState, useEffect } from 'react';

const levels = {
    Beginner: { width: '25%', color: 'bg-red-400' },
    Intermediate: { width: '50%', color: 'bg-yellow-400' },
    Advanced: { width: '75%', color: 'bg-green-500' },
    Expert: { width: '100%', color: 'bg-blue-600' },
    Native: { width: '100%', color: 'bg-blue-600' },
};

const ProgressBar = ({ level, animate }) => {
    const normalizedLevel =
        level.charAt(0).toUpperCase() + level.slice(1);

    const config = levels[normalizedLevel] || levels.Beginner;

    return (
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
                className={`h-full rounded-full ${config.color}`}
                style={{
                    width: animate ? config.width : '0%',
                    transition: 'width 1.2s ease-in-out',
                }}
            />
        </div>
    );
};

const Dropdown = ({ label, skills }) => {
    const [open, setOpen] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (!open) {
            setAnimate(false);
            return;
        }

        const timer = setTimeout(() => setAnimate(true), 150);
        return () => clearTimeout(timer);
    }, [open]);

    return (
        <div className="w-full mb-4">
            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                aria-expanded={open}
                className="w-full flex justify-between items-center rounded-md
                    border border-gray-300 px-4 py-3 bg-white text-sm
                    font-medium text-gray-700 hover:bg-gray-100
                    transition-colors duration-200"
            >
                {label}

                <svg
                    className={`ml-2 h-5 w-5 transition-transform duration-500
                        ${open ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            <div
                className={`grid transition-[grid-template-rows,opacity]
                    duration-700 ease-in-out
                    ${open
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
            >
                <div className="overflow-hidden min-h-0">
                    <div className="mt-2 p-4 bg-gray-50 border
                        border-gray-200 rounded-md shadow-sm">
                        <ul className="space-y-5 text-sm">
                            {skills.map(({ name, level }, index) => (
                                <li
                                    key={name}
                                    style={{
                                        transitionDelay: open
                                            ? `${index * 100}ms`
                                            : '0ms',
                                    }}
                                    className={`transition-all duration-500
                                        ${open
                                            ? 'translate-y-0 opacity-100'
                                            : '-translate-y-2 opacity-0'
                                        }`}
                                >
                                    <div className="flex justify-between mb-2">
                                        <span>{name}</span>
                                        <span className="text-gray-500">
                                            {level.charAt(0).toUpperCase()
                                                + level.slice(1)}
                                        </span>
                                    </div>

                                    <ProgressBar
                                        level={level}
                                        animate={animate}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <div
            className="skills font-serif mx-[10vw] lg:my-6 lg:my-[5vh]"
            id="skills"
        >
            <div className="title text-xl font-bold mb-4">
                Technical Skills
            </div>

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
