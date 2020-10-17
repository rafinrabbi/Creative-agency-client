import React from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      style={{
        height: 660,
        backgroundColor: "#111430",
        paddingTop: 40,
        marginTop: 80,
      }}
    >
      <h1 className="text-center text-white">
        Here are some of <span style={{ color: "#7AB259" }}>our works</span>
      </h1>
      <PortfolioCard></PortfolioCard>
    </div>
  );
};

export default Portfolio;
