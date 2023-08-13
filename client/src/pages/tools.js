import React from "react";
import Navbar from "@/components/navbar";
import Link from "next/link";

const Tools = () => {
  const buttons = [
    { label: "Player vs. Player Matchup Analysis:", info: "Dive into the intricacies of player battles on the cricket field. Dissect the strengths and weaknesses of individual players, offering insights that empower you to make strategic decisions for your fantasy cricket teams.", path: "/" },
    { label: "Team vs. Team Analysis:", info: "Uncover the secrets behind epic clashes with our detailed team analysis. Explore historical performance, head-to-head statistics, and team performances, providing you with a comprehensive view of the showdowns between the greats of the game.", path: "/" },
    { label: "Simulation and Predictor", info: "Experience the excitement of predicting match outcomes through our advanced predictor and simulator. Explore various scenarios, and experience taste of the thrill before the match even begins.", path: "/" },
    { label: "Batting Satistics", info: "Get a deeper understanding of batting prowess with our comprehensive batter stats. Beyond the basics, we offer detailed performance metrics and recent form insights, helping you assess the true impact of each batter.", path: "/statsbatting" },
    { label: "Bowling Satistics", info: "Delve into the world of bowling excellence with our in-depth bowler stats. Discover more than just figures, as we provide historical trends and detailed performance data to help you gauge the prowess of bowlers on any given day.", path: "/statsbowling" }
  ];

  const buttonGroups = [];
  for (let i = 0; i < buttons.length; i += 3) {
    buttonGroups.push(buttons.slice(i, i + 3));
  }

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <Navbar />
      <div className="mt-16 flex flex-wrap justify-center">
        {buttonGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex justify-center space-x-4 mb-4">
            {group.map((button, index) => (
              <Link href={button.path} key={index}>
                <div className="flip-card bg-gray-900 rounded-lg m-2 p-2 w-36 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
                  <div className="flip-card-inner">
                    <div className="flip-card-front flex justify-center items-center">
                      {button.label}
                    </div>
                    <div className="flip-card-back flex flex-col justify-center items-center">
                      <h1 className="font-bold text-gray-900">{button.label}</h1>
                      <p className="font-mono font-semibold text-xs">{button.info}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
