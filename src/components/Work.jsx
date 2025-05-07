const Work = () => {
    return (
        <>
            <div className="work font-serif mx-[10vw] my-[5vh]" id="work">
                <div className="title text-xl font-bold">
                    Work Experience
                </div>
                <div className="my-[2vh]">
                    <img
                        src="../../public/logotest.png"
                        alt="logo"
                        className="w-[50vw] sm:w-[20vw] mx-auto"
                    />
                </div>
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
        </>
    );
};

export default Work;
