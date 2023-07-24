import React, { useEffect, useState } from "react";
import RecommendedCollegeCard from "../../Components/CollegeCard/RecommendedCollegeCard";

const Colleges = () => {
    const [colleges, setColleges] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://campus-hunter-server.vercel.app/colleges")
            .then((res) => res.json())
            .then((data) => {
                setColleges(data);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <h1>Loading...</h1>;
    }
    // Scroll to top
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    return (
        <div className="min-h-screen w-full pb-16 pt-20 px-4">
            <h1 className="md:text-4xl text-2xl font-semibold text-center pb-10">
                --All Colleges--
            </h1>
            <div className="flex flex-col w-[90%] mx-auto gap-8">
                {colleges.map((clg, index) => (
                    <RecommendedCollegeCard
                        key={clg._id}
                        clg={clg}
                    ></RecommendedCollegeCard>
                ))}
            </div>
        </div>
    );
};

export default Colleges;
