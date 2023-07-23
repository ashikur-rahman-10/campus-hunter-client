import React from "react";

const TopBanner = () => {
    return (
        <div className="min-h-screen w-full bg-[url('https://i.ibb.co/CM25gst/diverse-young-male-female-student-holding-books-takeaway-coffee-cup-standing-front-building.jpg')] bg-fixed ">
            <div className="min-h-screen w-full bg-gradient-to-r from-[#b0a0c974] to-[#262426b7] bg-fixed bg-opacity-25 flex justify-center items-center">
                <div className="flex flex-col items-center gap-8">
                    <h1 className="md:text-6xl text-3xl text-white font-semibold">
                        Find Your Dream College.
                    </h1>
                    <div className="form-control w-[80%] md:w-96">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search…"
                                className="input input-bordered w-full"
                            />
                            <button className="btn btn-info text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
