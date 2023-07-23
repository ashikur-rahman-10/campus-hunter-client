import React, { useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { Link, useLocation } from "react-router-dom";

const RecommendedCollegeCard = ({ clg }) => {
    const location = useLocation();
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
    } = clg;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="md:w-[55%]">
                    <img
                        className="md:w-[600px] md:h-full"
                        src={collegeImage}
                        alt="Album"
                    />
                </figure>
                <div className="card-body md:w-[45%]">
                    <h2 className="card-title">{collegeName}</h2>
                    <div className="space-y-2">
                        <p>{researchHistory}</p>
                        <p>Admission Date: {admissionDates}</p>
                        {location.pathname === "/colleges" ? (
                            <p>Research Papers: {researchWorks.length}</p>
                        ) : (
                            <span>
                                <p>Events: {eventsDetails?.length}</p>
                                <ul className="list-disc pl-5 text-xs">
                                    {eventsDetails?.map((e, index) => (
                                        <li key={index}>{e.event}</li>
                                    ))}
                                </ul>
                                <p>Sports: {sportsCategories?.length}</p>
                                <ul className="list-disc pl-5 text-xs">
                                    {sportsCategories?.map((s, index) => (
                                        <li key={index}>{s.sportName}</li>
                                    ))}
                                </ul>
                            </span>
                        )}
                    </div>
                    <div>
                        <ReactStarsRating
                            className="flex gap-1"
                            value={ratings}
                            readOnly
                        />
                    </div>
                    <div className="card-actions justify-end absolute right-5 bottom-5">
                        <Link
                            to={`/college-details/${_id}`}
                            className="btn btn-sm text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-105 duration-200"
                        >
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendedCollegeCard;
