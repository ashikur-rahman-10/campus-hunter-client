import React, { useEffect, useState } from "react";
import RecommendedCollegeCard from "../../../../Components/CollegeCard/RecommendedCollegeCard";

const RecommendedCollege = () => {
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
    const recommendedColleges = colleges?.slice(0, 3);

    return (
        <div className="min-h-screen w-full py-16">
            <h1 className="md:text-4xl text-2xl font-semibold text-center pb-10">
                --Recomended For You--
            </h1>
            <div className="flex flex-col w-[90%] mx-auto gap-8">
                {recommendedColleges.map((clg, index) => (
                    <RecommendedCollegeCard
                        key={index}
                        clg={clg}
                    ></RecommendedCollegeCard>
                ))}
            </div>
        </div>
    );
};

export default RecommendedCollege;
