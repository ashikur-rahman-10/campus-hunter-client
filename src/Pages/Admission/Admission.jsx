import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
    const [colleges, setColleges] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/colleges")
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
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th></th>
                                <th>College Name</th>
                                <th>Admission Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {colleges.map((college, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{college.collegeName}</td>
                                    <td>{college.admissionDates}</td>
                                    <td>
                                        <Link
                                            to={`/admission-form/${college._id}`}
                                            className="btn btn-xs text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-105 duration-200"
                                        >
                                            Apply
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admission;
