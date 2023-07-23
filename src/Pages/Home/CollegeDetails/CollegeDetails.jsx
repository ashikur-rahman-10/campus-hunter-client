import React from "react";
import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
    const college = useLoaderData();
    const {
        _id,
        collegeImage,
        collegeName,
        ratings,
        researchHistory,
        admissionDates,
        eventsDetails,
        sportsCategories,
        researchWorks,
        admissionProcess,
    } = college;
    // Scroll to top
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    return (
        <div className="w-full min-h-screen py-20 px-4">
            <div>
                <div>
                    <img
                        className="max-w-3xl w-full mx-auto rounded-sm"
                        src={collegeImage}
                        alt=""
                    />
                    <h1 className="text-3xl text-center font-medium py-10">
                        {collegeName}
                    </h1>
                </div>
                <div className="space-y-3">
                    <p>{researchHistory}</p>
                    <div>
                        <p className="font-semibold">
                            Research Works: {researchWorks?.length}
                        </p>
                        <ul className="list-decimal pl-5 text-xs space-y-2">
                            {researchWorks?.map((researchWork, index) => (
                                <li key={index}>
                                    <div>
                                        <p className="font-semibold">
                                            {researchWork.title}
                                        </p>
                                        <div>
                                            Authors:
                                            <ul className="list-disc pl-5">
                                                {researchWork.authors.map(
                                                    (author, index) => (
                                                        <li key={index}>
                                                            {author}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <p>
                                            Published Year:{" "}
                                            {researchWork.publishedYear}
                                        </p>
                                        <p>Summery: {researchWork.summary}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold">
                            Events: {eventsDetails?.length}
                        </p>
                        <ul className="list-decimal pl-5 text-xs">
                            {eventsDetails?.map((e, index) => (
                                <li key={index}>
                                    <p className="font-bold">{e.event}: </p>
                                    <p>{e.details}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold">
                            Sports: {sportsCategories?.length}
                        </p>
                        <ul className="list-decimal pl-5 text-xs">
                            {sportsCategories?.map((s, index) => (
                                <li key={index}>
                                    <p className="font-bold">{s.sportName}:</p>
                                    <p>Coach: {s.coach}</p>
                                    <div>
                                        <p className="font-semibold underline">
                                            Achievements:
                                        </p>
                                        <ul className="list-disc">
                                            {s.achievements.map(
                                                (achievement, index) => (
                                                    <li key={index}>
                                                        {achievement}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold">
                            Admission Open: {admissionDates}
                        </p>
                        <div>
                            <p className="font-semibold">
                                Admission Processes:
                            </p>
                            <ul className="list-decimal pl-5 text-xs">
                                {admissionProcess?.map((process, index) => (
                                    <li key={index}>{process}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;
