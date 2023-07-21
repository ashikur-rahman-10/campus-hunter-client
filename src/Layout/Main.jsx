import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/Navbar/NavigationBar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <div>
            <div className="fixed w-full max-w-6xl">
                <NavigationBar></NavigationBar>
            </div>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
