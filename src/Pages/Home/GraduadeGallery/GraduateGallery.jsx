import React, { useEffect, useState } from "react";

const GraduateGallery = () => {
    const [gallery, setGallery] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/gallery")
            .then((res) => res.json())
            .then((data) => {
                setGallery(data);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="px-4 py-20">
            <h1 className="md:text-4xl text-2xl font-semibold text-center pb-10">
                --Graduate Photo Gallery--
            </h1>
            <div className="grid md:grid-cols-3 gap-8 grid-cols-1">
                {gallery.map((g) => (
                    <div key={g._id}>
                        <div className="shadow-md p-2 rounded-lg">
                            <img
                                className="hover:scale-150 duration-700 rounded-lg"
                                src={g.img}
                                alt=""
                            />
                            <div className="text-center font-medium mt-3 text-[#737373]">
                                <p>Graduation Year: {g.graduationYear}</p>
                                <p>{g.collegeName}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GraduateGallery;
