const Contact = () => {
    return (
        <div className="contact font-serif px-4 py-8 md:px-16 mx-[6vw]" id="contact">
            <div className="title text-2xl font-bold mb-6">
                Contact
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column */}
                <div className="flex-1 space-y-6">
                    {/* Phone */}
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                        </svg>
                        <span className="ml-4 text-gray-800">+66-93-326-1671</span>
                    </div>

                    {/* Email */}
                    <a href="mailto:zishun.d.gao@gmail.com" className="flex items-center text-gray-800 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <span className="ml-4">zishun.d.gao@gmail.com</span>
                    </a>
                </div>

                {/* Right Column */}
                <div className="flex-1 space-y-6">
                    {/* GitHub */}
                    <a href="https://github.com/your-profile" className="flex items-center text-gray-700 hover:text-black">
                        <i className="fab fa-github fa-lg mr-4"></i>
                        Visit My GitHub
                    </a>

                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/your-profile" className="flex items-center text-gray-700 hover:text-black">
                        <i className="fab fa-linkedin fa-lg mr-4"></i>
                        Visit My LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
