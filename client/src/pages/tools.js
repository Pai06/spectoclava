import React from "react";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { auth } from '@/components/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Tools = () => {

  const [user, setUser] = useAuthState(auth);



  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    const results = await signInWithPopup(auth, googleAuth);
    const { user } = results;
    const userInfo = {
      name: user.displayName,
      email: user.email
    };
    // Do something with userInfo, if needed
  };

  const buttons = [
    { label: "Player vs. Player Matchup Analysis:", info: "Dive into the intricacies of player battles on the cricket field. Dissect the strengths and weaknesses of individual players, offering insights that empower you to make strategic decisions for your fantasy cricket teams.", path: "/", image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/365500/365565.jpg" },
    { label: "Team vs. Team Analysis:", info: "Uncover the secrets behind epic clashes with our detailed team analysis. Explore historical performance, head-to-head statistics, and team performances, providing you with a comprehensive view of the showdowns between the greats of the game.", path: "/", image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/341700/341770.jpg" },
    { label: "Simulation and Predictor", info: "Experience the excitement of predicting match outcomes through our advanced predictor and simulator. Explore various scenarios, and experience taste of the thrill before the match even begins.", path: "/", image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/283900/283998.jpg" },
    { label: "Batting Statistics", info: "Get a deeper understanding of batting prowess with our comprehensive batter stats. Beyond the basics, we offer detailed performance metrics and recent form insights, helping you assess the true impact of each batter.", path: "/statsbatting", image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/365500/365551.jpg" },
    { label: "Bowling Statistics", info: "Delve into the world of bowling excellence with our in-depth bowler stats. Discover more than just figures, as we provide historical trends and detailed performance data to help you gauge the prowess of bowlers on any given day.", path: "/statsbowling", image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_50/lsci/db/PICTURES/CMS/364900/364921.jpg" }
  ];

  const buttonGroups = [];
  for (let i = 0; i < buttons.length; i += 3) {
    buttonGroups.push(buttons.slice(i, i + 3));
  }


  if (!user) {

    return (
      <><Navbar /><div className="min-h-screen ml-10 sm:mx-auto  bg-gray-900 font-bold text-white font-mono text-4xl  flex items-center justify-center ">
        Please Login Before Accessing this page
      </div></>

    );

  }

  return (
    <div className="bg-gray-900  text-gray-200 min-h-screen">
      <Navbar />
      <div className=" mt-14 sm:mt-24 flex flex-col justify-center items-center">
        {buttonGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
            {group.map((button, index) => (
              <Link href={button.path} key={index}>
                <div className="flip-card bg-gray-900 rounded-lg m-2 p-2 w-60 sm:w-80 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
                  <div className="flip-card-inner">
                    <div
                      className="flip-card-front flex justify-center items-center relative bg-cover bg-center rounded-lg overflow-hidden"
                      style={{
                        backgroundImage: `url('${button.image}')`
                      }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
                      <h1 className="text-base font-bold font-mono text-center text-white relative z-20">
                        {button.label}
                      </h1>
                    </div>

                    <div className="flip-card-back flex flex-col justify-center items-center">
                      <h1 className="font-bold text-gray-900">{button.label}</h1>
                      <p className="font-mono font-semibold text-xs text-center">
                        {button.info}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="mb-8" /> {/* Add margin below the component */}
    </div>
  );
};

export default Tools;
