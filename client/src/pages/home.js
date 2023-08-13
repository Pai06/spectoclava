import React from 'react';
import Navbar from '@/components/navbar';
import Head from 'next/head';
import { auth } from '@/components/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';


const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [user, setUser] = useAuthState(auth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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



  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-noto-sans">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main>
        <section id='section1' className='mt-10' >
          <div
            class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-900">
            <div class="flex flex-wrap items-center">
              <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_50/lsci/db/PICTURES/CMS/351500/351593.jpg" alt="Trendy Pants and Shoes"
                  class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
              </div>
              <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div class="px-6 py-12 md:px-12">
                  <h2 class="mb-4 text-2xl font-bold text-gray-300">
                    <span class='text-5xl gradient-text'>Spectoclava</span> - Cricket Matchup Dashboard with
                    Recommender and Predictor
                  </h2>
                  <p class="mb-6 text-neutral-500 dark:text-gray-400 text-lg">
                    We aim to explore the various conditions that affect the game of cricket and propose a
                    framework using a dashboard to predict matchups between players and teams.
                    This framework will aid in making informed decisions to form the
                    most efficient and competitive ‘Playing Eleven’ for tournaments,
                    considering the diverse factors mentioned above.
                  </p>
                  <p class="text-neutral-500 dark:text-gray-400 text-lg mb-4">
                    The model utilizes a comprehensive approach that incorporates statistical analysis, data
                    mining, and machine learning techniques to analyse and interpret the vast amount of
                    available cricket data. By considering the aforementioned factors, the proposed model
                    seeks to uncover hidden patterns using data manipulation to generate features that
                    contribute to the game's outcome.
                  </p>
                  {user ? (
                    <a href="/tools" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                      Get Started
                      <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                  ) : (
                    <button
                      className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700" onClick={() => {
                        setIsMenuOpen(false);
                        login();
                      }}
                    >
                      Get Started
                      <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>

                    </button>
                  )}

                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="border-t border-gray-200 text-gray-200 "></div>
        <section id='section2' class="bg-white dark:bg-gray-900">
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">How do we do it?</h2>
              <p class="mb-4">                    The model utilizes a comprehensive approach that incorporates statistical analysis, data
                mining, and machine learning techniques to analyse and interpret the vast amount of
                available cricket data. By considering the aforementioned factors, the proposed model
                seeks to uncover hidden patterns using data manipulation to generate features that
                contribute to the game's outcome.</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
              <img class="w-full rounded-lg" src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/318800/318827.jpg" alt="office content 1" />
              <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_50/lsci/db/PICTURES/CMS/365000/365015.jpg" alt="office content 2" />
            </div>
          </div>
        </section>
        <div className="border-t border-gray-200"></div>
        <section id="section3" className="bg-white dark:bg-gray-900 font-sans">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Powering innovation at <span class="font-extrabold">200,000+</span> companies worldwide</h2>
              <p class="mb-4 font-light">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
              <p class="mb-4 font-medium">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>

            </div>
          </div>
        </section>
        {/* Add more sections here as needed */}
      </main>
      <footer className="py-8 bg-gray-900 text-gray-200 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Spectoclava. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
