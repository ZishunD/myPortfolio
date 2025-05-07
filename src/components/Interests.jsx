const interestsData = [
    {
        title: "Scuba Diving",
        description:
            "Exploring the underwater world, discovering marine life, and enjoying the serenity beneath the waves.",
        image: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg",
    },
    {
        title: "Travelling",
        description:
            "Embracing new cultures, cuisines, and landscapes while creating unforgettable memories around the globe.",
        image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
    },
    {
        title: "Coding",
        description:
            "Building applications, solving problems, and continuously learning in the ever-evolving tech landscape.",
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    },
];

const Interests = () => {
    return (
        <div className="Interests font-serif px-[5vw] py-[5vh] mx-[5vw]" id="interests">
            <div className="title text-2xl font-bold mb-6">Interests</div>
            <div className="flex flex-wrap justify-center gap-6">
                {interestsData.map((interest, i) => (
                    <div
                        key={i}
                        className="w-full max-w-sm min-w-[280px] rounded overflow-hidden shadow-lg bg-white flex-shrink-0"
                    >
                        <img
                            className="w-full h-40 object-cover"
                            src={interest.image}
                            alt={interest.title}
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{interest.title}</div>
                            <p className="text-gray-700 text-base">{interest.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Interests;
