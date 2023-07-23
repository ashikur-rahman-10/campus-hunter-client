import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavigationBar.css";
import useAuth from "../../Hooks/useAuth";

const NavigationBar = () => {
    const { user, logout } = useAuth();
    const [loggedUser, setLoggedUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/${user?.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setLoggedUser(data);
                    setLoading(false);
                });
        }
    }, [user?.email]);

    const handleLogout = () => {
        logout()
            .then((result) => {
                // window.location.reload();
            })
            .catch((error) => {});
    };

    let navbarOptions;
    navbarOptions = (
        <div className="md:flex items-center">
            <li>
                <NavLink
                    to={"/"}
                    className="hover:text-blue-400 border-b md:border-none mt-3 md:mt-0 hover:bg-slate-200 hover:bg-opacity-30  py-2 px-3 rounded-xl md:mx-2 "
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/colleges"}
                    className="hover:text-blue-400 border-b md:border-none mt-3 md:mt-0 hover:bg-slate-200 hover:bg-opacity-30  py-2 px-3 rounded-xl md:mx-2 "
                >
                    Colleges
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/admission"}
                    className="hover:text-blue-400 border-b md:border-none mt-3 md:mt-0 hover:bg-slate-200 hover:bg-opacity-30  py-2 px-3 rounded-xl md:mx-2 "
                >
                    Admission
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/my-college"}
                    className="hover:text-blue-400 border-b md:border-none mt-3 md:mt-0 hover:bg-slate-200 hover:bg-opacity-30  py-2 px-3 rounded-xl md:mx-2 "
                >
                    My College
                </NavLink>
            </li>
            <li>
                {" "}
                {user && (
                    <button
                        onClick={handleLogout}
                        className="hover:text-blue-400 border-b md:border-none mt-3 md:mt-0 hover:bg-slate-200 hover:bg-opacity-30  py-2 px-3 rounded-xl"
                    >
                        Log Out
                    </button>
                )}
            </li>
        </div>
    );

    return (
        <div>
            <div className="navbar bg-black bg-opacity-30 md:px-8 md:mt-2 md:rounded-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <>{navbarOptions}</>
                        </ul>
                    </div>

                    <Link
                        to={"/"}
                        className="hover:scale-105 duration-500 normal-case text-xl"
                    >
                        <img
                            className="w-32 md:w-60 "
                            src="https://raw.githubusercontent.com/ashikur-rahman-10/campus-hunter-client/main/src/assets/logo/logo.png"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 text-white text-lg">
                        <>{navbarOptions}</>
                    </ul>
                </div>
                <div className="navbar-end flex items-center">
                    {user ? (
                        <div className="dropdown dropdown-end ">
                            <Link
                                to={`/profile/${loggedUser?._id}`}
                                className="text-white text-xs px-2 border flex w-fit border-white rounded-full bg-slate-700 truncate"
                            >
                                <p className="max-w-[70px] md:max-w-[150px] truncate">
                                    {user.displayName}
                                </p>
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <NavLink
                                to={"/login"}
                                className="hover:text-sky-400 hover:bg-slate-200 hover:bg-opacity-30 text-blue-300 py-2 px-3 rounded-xl md:mr-10 mr-5"
                            >
                                Login
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
