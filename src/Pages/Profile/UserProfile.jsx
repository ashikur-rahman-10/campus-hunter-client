import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const { user } = useAuth();
    const [loggedUser, setLoggedUser] = useState();
    const [loading, setLoading] = useState(true);

    const loggedEmail = user?.email;

    useEffect(() => {
        if (loggedEmail) {
            fetch(`http://localhost:5000/users/${loggedEmail}`)
                .then((res) => res.json())
                .then((data) => {
                    setLoggedUser(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                });
        }
    }, [loggedEmail]);

    console.log(loggedUser);
    if (loading) {
        return <div>Loading</div>;
    }

    return (
        <div className="min-h-screen w-full pt-20 pb-16 px-4">
            <div>
                <div className="w-fit flex flex-col justify-center items-center mx-auto gap-5 my-10">
                    <img
                        className="w-40 rounded-full h-40 outline outline-success text-center"
                        src={loggedUser.photoURL}
                        alt=""
                    />
                    <h3 className="text-center text-2xl font-medium">
                        {loggedUser.name}
                    </h3>
                    <Link
                        to={`/edit-profile/${loggedUser._id}`}
                        className="w-fit btn btn-xs text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-105 duration-200"
                    >
                        Edit Profile
                    </Link>
                </div>
                <div>
                    <h3 className="text-xl font-medium">
                        Personal Informations:
                    </h3>
                    <div className="space-y-2 my-5 text-[#737373]">
                        <p>Gender: {loggedUser?.gender}</p>
                        <p>University: {loggedUser?.university}</p>
                        <p>Address: {loggedUser?.address}</p>
                        <p>Mobile: {loggedUser?.phone}</p>
                        <p>Email: {loggedUser?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
