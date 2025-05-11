const Introduction = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start px-4 md:px-[10vw] py-8 font-serif mt-[10vh] transition-all duration-500 ease-in-out">
            <div className="w-full md:w-3/5">
                <img
                    className="w-full h-48 md:h-60 rounded object-cover"
                    src="/KVK9mDu_gSItPteIAGEKYw==.jpg" // Assuming it's in the public folder
                    alt="My avatar"
                />
            </div>
            <div className="w-full md:w-2/5 mt-4 md:mt-0 md:ml-6">
                <div>
                    <span className="name font-bold text-2xl md:text-3xl block">ZISHUN GAO</span>
                </div>
                <div className="mt-2">
                    <span className="title font-bold text-lg md:text-xl block">New Graduate Programmer</span>
                </div>
                <div className="desc mt-4">
                    <p className="text-base text-[#1C120D]">An irrational world is just a program in need of debugging.</p>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
