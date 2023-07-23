import React, { useEffect, useState } from "react";

const ResearchPaper = () => {
    const [researchPapers, setresearchPapers] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/reaserch-paper")
            .then((res) => res.json())
            .then((data) => {
                setresearchPapers(data);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="w-full min-h-screen py-20 px-4">
            <h1 className="md:text-4xl text-2xl font-semibold text-center pb-10">
                --Some Research Papers--
            </h1>
            <div className="flex flex-col md:flex-row w-full flex-wrap gap-4">
                {researchPapers.map((p) => (
                    <div key={p._id}>
                        <div className="space-y-3 py-4 px-6 border md:w-[550px] md:h-44 w-full shadow-xl rounded-md">
                            <p className="font-semibold">Title: {p.title}</p>
                            <div className="text-xs">
                                <p className="font-semibold">Authors:</p>
                                <ul className="list-decimal pl-5">
                                    {p.authors.map((a, index) => (
                                        <li key={index}>{a}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-xs font-medium flex gap-20 items-center">
                                <p>Published Year: {p.publishedYear}</p>
                                <a
                                    className="text-warning underline"
                                    href={p.link}
                                >
                                    Read Research Paper
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResearchPaper;
