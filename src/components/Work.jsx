const Work = () => {
    return (
        <>
            <div className="work font-serif mx-[10vw] my-[5vh] transition-all duration-500 ease-in-out" id="work">
                <div className="title text-xl font-bold">
                    Work Experience
                </div>
                <div className="mt-5 mb-10">
                <p className="role font-bold">ICT Teacher</p>
                <p className="companyName">Samsen Wittayalai School</p>
                <p className="duration">Oct 2025 - Oct 2026</p>
                <p className="location">Bangkok, Thailand</p>
                <div className="my-[2vh]">
                    <p className="font-bold">Course Content</p>
                    <div className="techStackList text-sm text-gray-700">
                        <ul className="list-disc list-inside space-y-1">
                            <li>AI</li>
                            <li>Robotic</li>
                            <li>Data Management</li>
                            <li>Physical Computing</li>
                            <li>Website Development</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="font-bold">Description</p>
                    <p className="description">
                        Worked as an ICT teacher, teaching programming, web development (HTML, CSS, JavaScript), Python, AI, physical computing, networking, and cybersecurity. Prepared English-language teaching materials, designed practical coding activities, and guided students through hands-on projects and assignments.
                    </p>
                </div>
                </div>
                <div className="my-10">
                <p className="role font-bold">Full Stack Developer Trainee</p>
                <p className="companyName">Vanness Plus Consulting Co. Ltd Wiki</p>
                <p className="duration">June 2025 - August 2025</p>
                <p className="location">Remote, Bangkok, Thailand</p>
                <div className="my-[2vh]">
                    <p className="font-bold">Tech Stack</p>
                    <div className="techStackList text-sm text-gray-700">
                        <ul className="list-disc list-inside space-y-1">
                            <li>React</li>
                            <li>Node.js</li>
                            <li>SQL (Database Design & Operation)</li>
                            <li>Software Requirements Specification (SRS)</li>
                            <li>User Manual Documentation</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="font-bold">Description</p>
                    <p className="description">
                        Worked on internal company administration web applications, developing features for leave requests, salary requests, and task record management. Independently explored full-stack development concepts and practiced implementing application logic, debugging, and improving web application functionality.
                    </p>
                </div>
                </div>
                <div className="my-10">
                
                <p className="role font-bold">Web Developer Trainee</p>
                <p className="companyName">Vanness Plus Consulting Co. Ltd Wiki</p>
                <p className="duration">June 2024 - August 2024</p>
                <p className="location">Remote, Bangkok, Thailand</p>
                <div className="my-[2vh]">
                    <p className="font-bold">Tech Stack</p>
                    <div className="techStackList text-sm text-gray-700">
                        <ul className="list-disc list-inside space-y-1">
                            <li>React</li>
                            <li>Node.js</li>
                            <li>SQL (Database Design & Operation)</li>
                            <li>Software Requirements Specification (SRS)</li>
                            <li>User Manual Documentation</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="font-bold">Description</p>
                    <p className="description">
                        Developed a company introduction and service sales website using
                        React and Node.js. Integrated MySQL for managing orders and user
                        accounts. Also created the Software Requirements Specification (SRS)
                        and user manual for future operations and updates.
                    </p>
                </div>
                </div>
            </div>
        </>
    );
};

export default Work;
