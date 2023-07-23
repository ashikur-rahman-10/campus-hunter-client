import React from "react";
import TopBanner from "./TopBanner/TopBanner";
import RecommendedCollege from "./RecommendedCollege/RecommendedCollege";
import GraduateGallery from "../GraduadeGallery/GraduateGallery";
import ResearchPaper from "../ResearchPaper/ResearchPaper";

const Home = () => {
    // Scroll to top
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    return (
        <div>
            <TopBanner></TopBanner>
            <RecommendedCollege></RecommendedCollege>
            <GraduateGallery></GraduateGallery>
            <ResearchPaper></ResearchPaper>
        </div>
    );
};

export default Home;
