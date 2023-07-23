import React from "react";
import useAuth from "../../Hooks/useAuth";

const FacebookLogin = () => {
    const { facebookLogin } = useAuth();
    const handleFacebookLogin = () => {
        facebookLogin()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // const { displayName, photoURL, email } = loggedUser;
                // const savedUser = {
                //     name: displayName,
                //     photoURL,
                //     email,
                //     role: "Student",
                // };
                // console.log(savedUser);
                // fetch("https://modonovo-server.vercel.app/users", {
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify(savedUser),
                // });
                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate(from);
                window.location.reload();
                // console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div className="w-fit flex justify-center items-center mb-5 ">
            <img
                onClick={handleFacebookLogin}
                className="w-10 border p-1 rounded-full bg-slate-100 hover:saturate-0 cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                alt=""
            />
        </div>
    );
};

export default FacebookLogin;
