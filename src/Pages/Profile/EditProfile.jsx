import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
const EditProfile = () => {
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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { name, phone, university, address } = data;
        const updateUserInfo = {
            name,
            phone,
            university,
            address,
        };
        fetch(`http://localhost:5000/users/${loggedUser._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateUserInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Informations Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    Swal.fire({
                        icon: "info",
                        title: "Informations already upto date",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };
    return (
        <div className="w-full min-h-screen pt-20 pb-16 px-4">
            <div className="w-full min-h-screen flex justify-center items-center">
                <div className="md:w-1/2 p-4 w-full max-w-md md:ml-20">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="shadow-md rounded-xl  md:p-10 p-6 "
                    >
                        <h1 className="text-center md:text-4xl text-2xl my-10 md:my-5">
                            Update Profile
                        </h1>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={loggedUser?.name}
                                placeholder="name"
                                {...register("name", { required: true })}
                                className="input input-bordered input-info"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={loggedUser?.phone}
                                placeholder="phone number (optional)"
                                {...register("phone")}
                                className="input input-bordered input-info"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">
                                    University Name
                                </span>
                            </label>
                            <input
                                type="text"
                                defaultValue={loggedUser?.university}
                                placeholder="University"
                                {...register("university")}
                                className="input input-bordered input-info"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="address"
                                defaultValue={loggedUser?.address}
                                {...register("address")}
                                className="input input-bordered input-info"
                            />
                        </div>
                        <div>
                            <input
                                type="submit"
                                placeholder=""
                                value={"Save Change"}
                                className="input input-bordered w-full hover:bg-transparent hover:text-info bg-info text-white my-7 input-info"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
