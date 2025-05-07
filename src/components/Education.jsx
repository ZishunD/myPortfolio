const Education = () => {
    return (
        <div className="education font-serif px-4 py-8 md:px-16 max-w-5xl mx-[6vw]" id="education">
            <div className="title text-2xl md:text-3xl font-bold mb-6">
                Education
            </div>
            <div className="content">
                <div className="uniLogo flex flex-col md:flex-row items-start md:items-center">
                    <img
                        className="w-40 h-auto md:w-60 md:h-32 object-contain"
                        src="/mahidol.png" // public path doesn't need `../../public/`
                        alt="Mahidol University Logo"
                    />
                    <div className="md:ml-8 mt-4 md:mt-0">
                        <div className="flex flex-col sm:flex-row gap-4 text-sm md:text-base">
                            <p className="duration">2021 - Present</p>
                            <p className="GPA">GPA: 2.39</p>
                        </div>
                        <div className="mt-3">
                            <p className="uniName font-bold text-lg md:text-xl">Mahidol University</p>
                            <p className="degree text-gray-700 mt-1">
                                B.Sc. in Information and Communication Technology
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
