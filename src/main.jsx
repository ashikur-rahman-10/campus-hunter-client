import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProvider from "./Providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <AuthProvider>
                <div className="max-w-6xl mx-auto">
                    <RouterProvider router={router} />
                </div>
            </AuthProvider>
        </HelmetProvider>
    </React.StrictMode>
);
