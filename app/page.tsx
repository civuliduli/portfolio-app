"use client";

import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';

export default function Home() {

  // New state to manage the enlarged image view (modal)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);



  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-gray-900">
      <header className="mb-2 px-4 shadow">
        <div className="relative mx-auto flex max-w-screen-xl flex-col py-4 md:flex-row md:items-center md:justify-between">
          <Link className="flex items-center text-2xl font-black" href="/">
            <span className="text-blue-700 text-3xl">AC.</span>
          </Link>
          <input className="peer hidden" type="checkbox" id="navbar-open" />
          <label className="absolute right-0 mt-1 cursor-pointer text-xl md:hidden" htmlFor="navbar-open">
            <span className="sr-only">Toggle Navigation</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" /></svg>
          </label>
          <nav aria-label="Header Navigation" className="peer-checked:block hidden pl-2 py-6 md:block md:py-0">
            <ul className="flex flex-col gap-y-4 md:flex-row md:gap-x-10 items-center">
              <li><a className="text-white hover:text-blue-600 text-2xl" href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
              <li><a className="text-white hover:text-blue-600 text-2xl" href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
              <li><a className="text-white hover:text-blue-600 text-2xl" href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a></li>
              <li><a className="text-white hover:text-blue-600 text-2xl" href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a></li>
              <li><a className="text-white hover:text-blue-600 text-2xl" href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
              <li className="mt-2 md:mt-0">
                <a className="rounded-xl px-4 py-2 bg-blue-500 font-medium text-black text-lg" href="#">Resume</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-74" id="home">
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-screen-xl mx-auto py-12 gap-8">
            <div className="flex flex-col gap-y-6 items-center lg:items-start text-center lg:text-left flex-1">
              <span className="text-blue-600 text-xl">Hello I&apos;m</span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4">
                <h1 className="text-white text-6xl lg:text-8xl font-bold">Abdulla</h1>
                <h1 className="text-blue-600 text-6xl lg:text-8xl font-bold underline decoration-4 underline-offset-8 decoration-blue-500/30">Civuli</h1>
              </div>
              <p className="text-gray-400 text-2xl sm:text-4xl font-light">Mobile Developer & Front-End Engineer</p>
              <p className="text-gray-400 font-light text-2xl">Building elegant solutions to complex problems with modern technologies.</p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex gap-x-4">
                  <a className="rounded-xl px-4 py-2 font-medium text-black bg-blue-500 text-lg whitespace-nowrap" href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact Me</a>
                  <a className="outline-1 outline-offset-1 outline-white rounded-xl px-4 py-2 font-medium text-white bg-transparent whitespace-nowrap text-lg" href="#contact" onClick={(e) => handleScroll(e, 'projects')}>View Projects</a>
                </div>
                <div className="flex gap-x-4">
                  <a href="https://mk.linkedin.com/in/abdulla-civuli-42923523b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-white hover:text-blue-600 cursor-pointer">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="mailto:your-email@example.com" aria-label="Send an email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-white hover:text-blue-600 cursor-pointer">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative bg-gray-900 border border-gray-700 p-10 rounded-2xl shadow-sm w-full max-w-3xl lg:max-w-2xl flex-shrink-0">
              <div className="flex items-center justify-between mb-10">
                <div className="flex space-x-3">
                  <div className="w-5 h-5 rounded-full bg-red-500"></div>
                  <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
                  <div className="w-5 h-5 rounded-full bg-green-500"></div>
                </div>
                <div className="text-base text-gray-500 font-medium">developer.js</div>
              </div>
              <div className="flex flex-col gap-y-3 text-xl sm:text-2xl">
                <p className="text-gray-500">Software Engineer</p>

                <div>
                  <pre>
                    <span className="text-pink-400">const </span>
                    <span className="text-blue-400">developer </span>
                    <span className="text-gray-400">= </span>
                    <span className="text-orange-400">{`{`}</span>
                  </pre>
                </div>

                <div className="pl-8">
                  <pre>
                    <span className="text-purple-400">name</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-green-400">&apos;Abdulla Civuli&apos;,</span>
                  </pre>
                </div>

                <div className="pl-8">
                  <pre>
                    <span className="text-purple-400">skills</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-orange-400">[</span>
                    <span className="text-green-400">&apos;UIKit&apos;, &apos;SwiftUI&apos;, &apos;Angular&apos;</span>
                    <span className="text-orange-400">],</span>
                  </pre>
                </div>

                <div className="pl-8">
                  <pre>
                    <span className="text-purple-400">focuses</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-orange-400">[</span>
                    <span className="text-green-400">&apos;Mobile&apos;, &apos;Full-Stack&apos;</span>
                    <span className="text-orange-400">],</span>
                  </pre>
                </div>

                <div className="pl-8">
                  <pre>
                    <span className="text-purple-400">learning</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-green-400">&apos;Always&apos;</span>
                  </pre>
                </div>

                <div>
                  <pre>
                    <span className="text-orange-400">{`}`}</span>
                    <span className="text-gray-400">;</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* About Me Section */}
      <section className="py-74" id="about">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-screen-2xl mx-auto px-8 gap-16">
          {/* Left Content */}
          <div className="flex flex-col gap-y-8 flex-[3]">
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="underline decoration-4 underline-offset-8 decoration-blue-500/30">About</span> Me
            </h1>
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-6 h-6 text-blue-500">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
                <h2 className="text-white text-3xl font-semibold">Bio</h2>
              </div>
              <p className="text-gray-400 text-2xl leading-relaxed">
                Skilled iOS Developer with expertise in mobile app development and front-end Angular development. Also experienced with React, NextJS, and Vue.js.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
              <div className="flex flex-col gap-y-4 border border-gray-700 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-6 h-6 text-blue-500">
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                    <path d="M22 10v6"></path>
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                  </svg>
                  <h3 className="text-white text-3xl font-semibold">Education</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white text-3xl font-medium">Bachelor in Computer Science</h4>
                    <p className="text-gray-400 text-2xl mt-1">University of Tetova</p>
                    <p className="text-gray-400 text-2xl mt-1">2019 - 2023</p>
                    <p className="text-gray-400 text-xl mt-2"></p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-4 border border-gray-700 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-6 h-6 text-blue-500">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <h3 className="text-white text-3xl font-semibold">Experience</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white text-3xl font-medium">Shortcut Balkans</h4>
                    <p className="text-gray-400 text-2xl mt-1 font-bold">iOS Engineer</p>
                    <p className="text-gray-400 text-base mt-1">June 2023 - October 2025</p>
                  </div>
                  <div>
                    <h4 className="text-white text-2xl font-medium">Moonlight AS</h4>
                    <p className="text-gray-400 text-2xl mt-1 font-bold">iOS Engineer</p>
                    <p className="text-gray-400 text-base mt-1">January 2024 - August 2024</p>
                  </div>
                  <div>
                    <h4 className="text-white text-2xl font-medium">i Solve</h4>
                    <p className="text-gray-400 text-2xl mt-1 font-bold">Front - End Engineer</p>
                    <p className="text-gray-400 text-base mt-1">March 2022 - May 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Profile Card */}
          <div className="flex-shrink-0 lg:ml-8 flex-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm flex flex-col items-center">
              <div className="relative mb-8 flex justify-center">
                <div className="relative">
                  <img src="/DSC02283.JPG" alt="Abdulla Civuli" className="w-64 h-64 rounded-full object-cover border-4 border-white" />
                </div>
              </div>
              <div className="text-center mb-8">
                <h1 className="text-white text-4xl font-bold mb-2">Abdulla Civuli</h1>
                <p className="text-gray-400 text-xl">Mobile Developer & Front-End Engineer</p>
              </div>
              <div className="flex justify-center flex-wrap gap-4 mb-8">
                <span className="text-gray-300 px-4 py-2 rounded-full text-2xl whitespace-nowrap border border-gray-500">Swift</span>
                <span className="text-gray-300 px-4 py-2 rounded-full text-2xl whitespace-nowrap border border-gray-500">SwiftUI</span>
                <span className="text-gray-300 px-4 py-2 rounded-full text-2xl whitespace-nowrap border border-gray-500">Angular</span>
                <span className="text-gray-300 px-4 py-2 rounded-full text-2xl whitespace-nowrap border border-gray-500">Full Stack</span>
              </div>
              <div className="flex justify-center mb-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7,10 12,15 17,10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-74" id="projects">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col gap-y-8 mb-12">
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold">
              My <span className="underline decoration-4 underline-offset-8 decoration-blue-500/30">Projects</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
              Here&apos;s a showcase of my recent work spanning web development, mobile applications, and data processing. Each project demonstrates my commitment to creating efficient, scalable solutions using modern technologies and best practices.
            </p>
          </div>
          <div className="flex flex-col gap-y-10 rounded-2xl shadow-sm">
            <div className="flex items-center gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-6 h-6 text-blue-500">
                <polyline points="16,18 22,12 16,6"></polyline>
                <polyline points="8,6 2,12 8,18"></polyline>
              </svg>
              <h3 className="text-white text-3xl font-semibold">Shortcut Balkans</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">

              {/* --- PROJECT CARD 1 --- */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/Rema-Screen.png")}
                >
                  <img
                    src="/Rema-Screen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">Rema 1000</h4>
                  <a
                    href="https://apps.apple.com/no/app/rema-1000/id1184277401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-base hover:bg-gray-700 transition-colors w-fit"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 text-2xl mb-6">
                  REMA 1000 is a Norwegian discount grocery retailer with around 1,000 stores across Norway and Denmark. Their &apos;Stavset&apos; grocery store in Trondheim, is focused on making shopping as easy as possible for their customers, provide a safe working environment for their staff and optimising in-store logistics.
                </p>
              </div>

              {/* --- PROJECT CARD 2 --- */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/NorgesnettScreen.png")}
                >
                  <img
                    src="/NorgesnettScreen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">Norgesnett</h4>
                  <a
                    href="https://apps.apple.com/no/app/norgesnett-kundeapp/id1661947020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-base hover:bg-gray-700 transition-colors w-fit"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 text-2xl mb-6">This project is a comprehensive mobile app designed for an energy company, allowing clients to conveniently monitor
                  and manage their energy usage. The app provides users with real-time insights into their energy consumption, up-to-
                  date energy prices, and access to past and current invoices. By offering a clear overview of their usage patterns and
                  billing details, clients can make more informed decisions to optimize their energy costs.</p>
              </div>

              {/* --- PROJECT CARD 3 --- */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/InfoMentorScreen.png")}
                >
                  <img
                    src="/InfoMentorScreen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">InfoMentor</h4>
                  <a
                    href="https://apps.apple.com/is/app/infomentor-staff/id1295090571"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-base hover:bg-gray-700 transition-colors w-fit"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 text-2xl mb-6">The InfoMentor app is an educational tool designed to enhance communication between schools, students, and parents.
                  It provides easy access to various school-related information, such as assignments, attendance, and assessments.
                  Schools using InfoMentor can customize the app features, enabling parents and students to receive notifications for
                  updates, view assessment results, and monitor student progress. The app helps streamline school-parent
                  communication by centralizing relevant updates in one place, accessible on mobile devices.</p>

              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/CuttersScreen.png")}
                >
                  <img
                    src="/CuttersScreen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">Cutters</h4>
                  <a
                    href="https://apps.apple.com/no/app/cutters-smarter-haircuts/id1466739130"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-base hover:bg-gray-700 transition-colors w-fit"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 text-2xl mb-6">The Cutters app is designed to simplify the process of getting a haircut by providing a quick, ef cient, and  xed-price
                  service without the need for appointments. The app allows users to and nearby Cutters salons, join a digital queue, and
                  pay directly through the app. This drop-in-only concept is available across multiple salons in the Nordic countries,
                  making it convenient for users to get haircuts on the go. The service emphasizes quality and eficiency, offering haircuts
                  at a standardized price point.</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/VK-MediaScreen.png")}
                >
                  <img
                    src="/VK-MediaScreen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">VK-Media</h4>
                  <a
                    href="https://apps.apple.com/fi/app/v%C3%A4sterbottens-kuriren/id375292392"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-base hover:bg-gray-700 transition-colors w-fit"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 text-2xl mb-6">VKMedia is a prominent media company in Sweden, primarily known for its digital presence across various platforms.
                  They have developed multiple apps to deliver tailored content, using the innovative PocketPress platform to enhance
                  user engagement. This allows VKMedia to integrate their rich web content into native mobile apps, offering features like
                  notifications, native audio playback, and content sharing. Their suite of apps serves several brands, such as Folkbladet,
                  Hockeyfokus, and Västerbottens-Kuriren, focusing on delivering local news and entertainment content seamlessly to
                  users on both Android and iOS devices.By leveraging this technology, VKMedia aims to provide a smooth and intuitive
                  user experience while keeping maintenance eficient, ensuring they can focus on high-quality journalism and content
                  delivery.</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/WilfaScreen.png")}
                >
                  <img
                    src="/WilfaScreen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">Wilfa</h4>
                  <a
                    href="https://apps.apple.com/jo/app/wilfa/id6502942799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-base hover:bg-gray-700 transition-colors w-fit"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 text-2xl mb-6">Wilfa is a Norwegian-owned company that was established in 1948 and is today one of the Nordic region&apos;s leading
                  suppliers of small electrical appliances for thousands of homes. Wilfa is a leading brand with a focus on design, quality,
                  safety and innovation. We focus on the environment in all our work, and as of spring 2020, Wilfa is environmentally
                  certified and has become an Eco-Lighthouse company - we are proud of that!</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/TriArtScreen.png")}
                >
                  <img
                    src="/TriArtScreen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">TriartPlay</h4>
                  <a
                    href="https://apps.apple.com/se/app/triart-play/id1560314148?platform=iphone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-base hover:bg-gray-700 transition-colors w-fit"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 text-2xl mb-6">TriArt Play is a Swedish streaming platform focused on offering high-quality films for cinema enthusiasts. Launched by
                  TriArt Film AB, it aims to bring a curated selection of international and Swedish films to audiences, emphasizing
                  independent, art-house, and critically acclaimed titles. Unlike traditional streaming services, TriArt Play uses a hybrid
                  model that combines subscription-based access with transactional rentals. The platform is available on web browsers,
                  Android, and iOS devices, allowing users to stream directly or cast to their TVs using Chromecast.</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/WaterFrontScreen.png")}
                >
                  <img
                    src="/WaterFrontScreen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">WaterFront Cabins</h4>
                  <a
                    href="https://apps.apple.com/us/app/waterfront-cabins/id6444448809"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-base hover:bg-gray-700 transition-colors w-fit"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 text-2xl mb-6">Waterfront Cabins offers smart living in Gothenburg and is an ideal place for companies, consultants, students and
                  private travelers looking for both short and long stays. Situated on the waterfront, you can enjoy the relaxing
                  atmosphere and beautiful views that Gothenburg harbor offers. The area has a large parking lot available through the
                  City of Gothenburg&apos;s parking for a fee, which makes it easy to get to us.</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/SDW-Screen.png")}
                >
                  <img
                    src="/SDW-Screen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">Swedish Design Week</h4>
                  <a
                    href="https://apps.apple.com/tr/app/stockholm-design-week/id590228998"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-base hover:bg-gray-700 transition-colors w-fit"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 text-2xl mb-6">Stockholm Design Week is a week filled with inspiring events taking place in the heart of Stockholm. We welcome
                  design enthusiasts from all over the world to celebrate great design, innovations and beautiful things and at the same
                  time discover Stockholm as a great design destination.</p>

              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/ApoteaScreen.png")}
                >
                  <img
                    src="/ApoteaScreen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">Apotea</h4>

                </div>
                <p className="text-gray-400 text-2xl mb-6">Apotea is the online pharmacy that always has fast deliveries, good prices and a large range. With us you will find both non-prescription goods and prescription products if you want to pick up your prescription for both you, your family and your four-legged friends. Did you know that you can easily pick up animal prescriptions from us by logging in with your e-ID?
                  At Apotea you will find pharmacy products that are sent to you with fast delivery if you are at home sick with, for example , a fever . We also have thousands of products in health, beauty and skin care. When you pick up a prescription from us, our pharmacists will take care of your case just like at a regular physical pharmacy. If you want advice or have questions about your prescription medicines, help is available via email, telephone or chat. Apotea is Sweden&apos;s largest pharmacy that is only available online.</p>

              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/TideScreen.png")}
                >
                  <img
                    src="/TideScreen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">Tide</h4>
                  <a
                    href="https://apps.apple.com/no/app/tide-as-poengjakten/id1586822390"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-base hover:bg-gray-700 transition-colors w-fit"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 text-2xl mb-4">An app to motivate bus drivers to walk more but also to teach them health related tips along the way.</p>

              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/WildFireScreen.png")}
                >
                  <img
                    src="/WildFireScreen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">WildFire</h4>

                </div>
                <p className="text-gray-400 text-2xl mb-6">WildFire is an app developed to allow users to report a fire by taking a picture, selecting the location,
                  and submitting the report to the nearest fire department. It also provides the ability to vote on a fire&apos;s
                  location based on its risk level.</p>
          
              </div>


            </div>

            <div className="flex items-center gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-6 h-6 text-blue-500">
                <polyline points="16,18 22,12 16,6"></polyline>
                <polyline points="8,6 2,12 8,18"></polyline>
              </svg>
              <h3 className="text-white text-3xl font-semibold">Moonlight</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">

              {/* --- PROJECT CARD 1 --- */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/MoonlightScreen.png")}
                >
                  <img
                    src="/MoonlightScreen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">Moonlight</h4>
                  <a
                    href="https://apps.apple.com/hr/app/moonlight-create-read-share/id1510126988"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-base hover:bg-gray-700 transition-colors w-fit"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 text-2xl mb-6">
                  Moonlight is the ultimate destination for immersive storytelling and interactive experiences. Moonlight
                  is a platform designed to bring stories to life through innovative features, community engagement and
                  cutting edge technology.
                  Whether you&apos;re a reader seeking compelling stories or a creator looking to share your unique
                  narratives, Moonlight offers a space where imagination meets interaction. With a rich array of tools and
                  features, we empower storytellers to create engaging stories and connect with audiences eager to dive
                  into their worlds. Moonlight is more than just an app; it is a vibrant community where stories are born
                  and shared, inspiring creativity and connection.          </p>

              </div>



              {/* --- PROJECT CARD 3 --- */}





            </div>

            <div className="flex items-center gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-6 h-6 text-blue-500">
                <polyline points="16,18 22,12 16,6"></polyline>
                <polyline points="8,6 2,12 8,18"></polyline>
              </svg>
              <h3 className="text-white text-3xl font-semibold">i Solve</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">

              {/* --- PROJECT CARD 1 --- */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/RamadanAppScreen.png")}
                >
                  <img
                    src="/RamadanAppScreen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xlfont-bold">Ramadan App</h4>

                </div>
                <p className="text-gray-400 text-2xl mb-6">
                  The program is specially designed for the holy month of Ramadan, allowing users to see how many
                  hours are left until iftar or suhoor based on their city. It also includes a compass feature that shows the
                  exact direction of the Kaaba.        </p>

              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/MenuAppScreen.png")}
                >
                  <img
                    src="/MenuAppScreen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">Restaurant Menu App</h4>

                </div>
                <p className="text-gray-400 text-2xl mb-6">
                  A restaurant menu app that relied on the Conome system, allowing customers to create a menu, add or
                  remove products and categories, rearrange their porition and finally publish the menu live.       </p>

              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/ConomePOS.png")}
                >
                  <img
                    src="/ConomePOS.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">Conome POS</h4>

                </div>
                <p className="text-gray-400 text-2xl mb-6">
                  The program is designed to process and log payments, with added functionality for managing
                  waitstaff. It features a dedicated interface for waiters to efficiently manage their tables and customers.
                  The program relies on the Conome system       </p>
                {/* <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-md border border-blue-500/30">Python</span>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-md border border-blue-500/30">Scrapy</span>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-md border border-blue-500/30">MongoDB</span>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-md border border-blue-500/30">Data Mining</span>
          </div> */}
              </div>






            </div>

            <div className="flex items-center gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-6 h-6 text-blue-500">
                <polyline points="16,18 22,12 16,6"></polyline>
                <polyline points="8,6 2,12 8,18"></polyline>
              </svg>
              <h3 className="text-white text-3xl font-semibold">Freelance</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">

              {/* --- PROJECT CARD 1 --- */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/CMS-PortfoiloScreen.png")}
                >
                  <img
                    src="/CMS-PortfoiloScreen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">Scooter Rent App</h4>

                </div>
                <p className="text-gray-400 text-2xl mb-6">
                  This application is designed for a small business to manage scooter rentals by registering customers, creating contracts, assigning scooters, tracking rental periods, and automatically calculating the rental cost based on the scooter’s price and the number of days rented.          </p>
                {/* <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-md border border-blue-500/30">Python</span>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-md border border-blue-500/30">Scrapy</span>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-md border border-blue-500/30">MongoDB</span>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-md border border-blue-500/30">Data Mining</span>
          </div> */}
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div
                  className="relative w-full h-72 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage("/KBC-Screen.png")}
                >
                  <img
                    src="/KBC-Screen.png"
                    alt="Web Scraper"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  {/* Expand Button */}
                  <div className="absolute top-3 right-3">
                    <button className="flex items-center gap-x-1 px-2.5 py-1.5 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-200 text-xs hover:bg-gray-800 transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Expand
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-white text-3xl font-bold">KBC - Dibra</h4>
                  <a
                    href="https://kbcdibra.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-base hover:bg-gray-700 transition-colors w-fit"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 text-2xl mb-6">
                  This project was created for the KBC Dibra Mountaineering Club. The website showcases information
                  about the club, its achievements, and the hiking trails it has conquered. Users can register to receive
                  notifications when new hiking events are scheduled. The website uses Sanity as a CMS, giving
                  administrators the ability to add, remove, and manage hiking events and other content.        </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-md border border-blue-500/30">Python</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-md border border-blue-500/30">Scrapy</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-md border border-blue-500/30">MongoDB</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-md border border-blue-500/30">Data Mining</span>
                </div>
              </div>
            </div>





          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-74" id="skills">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col gap-y-8 mb-12">
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold">
              My <span className="underline decoration-4 underline-offset-8 decoration-blue-500/30">Skills</span>
            </h1>
            <p className="text-gray-400 text-2xl leading-relaxed max-w-3xl">
              I&apos;ve worked with a range of technologies in the web development world, from mobile to frontend and everything in between.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
              <div className="flex items-center gap-x-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal text-blue-500">
                  <polyline points="4,17 10,11 4,5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
                <h3 className="text-white text-4xl font-semibold">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">Swift</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">SwiftUI</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">UIKit</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">Angular</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">React</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">NextJS</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">Typescript</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">HTML/CSS</span>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
              <div className="flex items-center gap-x-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout text-blue-500">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                <h3 className="text-white text-4xl font-semibold">Mobile Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">iOS</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">Swift</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">UIKit</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">SwiftUI</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">XCode</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">Combine</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">Foundation</span>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
              <div className="flex items-center gap-x-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server text-blue-500">
                  <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                  <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
                <h3 className="text-white text-4xl font-semibold">Front - End Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">Angular</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">Angular Material</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">Typescript</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">Javascript</span>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
              <div className="flex items-center gap-x-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database text-blue-500">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path>
                  <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"></path>
                </svg>
                <h3 className="text-white text-4xl font-semibold">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">MongoDB</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">MySQL</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">Firebase</span>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
              <div className="flex items-center gap-x-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings text-blue-500">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <h3 className="text-white text-4xl font-semibold">Tools & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">Git</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">Agile/Scrum</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">GitLab</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">Proxyman</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">XCode</span>
                <span className="px-3 py-2 bg-gray-700/50 text-gray-300 text-2xl rounded-lg border border-gray-600/50">TestFlight</span>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-74" id="contact">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col gap-y-8 mb-12">
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold">
              Get In <span className="underline decoration-4 underline-offset-8 decoration-blue-500/30">Touch</span>
            </h1>
            <p className="text-gray-400 text-2xl leading-relaxed max-w-3xl">
              Have a question or want to work together? Feel free to drop me a message. I&apos;d love to hear from you!
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex flex-col gap-y-8 flex-1">
              <div>
                <h3 className="text-white text-3xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-x-4">
                    <div className="bg-gray-800/50 p-3 rounded-full border border-gray-700/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-blue-500">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-3xl">Email</h4>
                      <p className="text-gray-400 text-2xl">abdulla-civuli@hotmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <div className="bg-gray-800/50 p-3 rounded-full border border-gray-700/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-blue-500">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-3xl">Phone</h4>
                      <p className="text-gray-400 text-2xl">+38976989297</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <div className="bg-gray-800/50 p-3 rounded-full border border-gray-700/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-blue-500">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-3xl">Location</h4>
                      <p className="text-gray-400 text-2xl">Debar, North Macedonia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-white text-3xl font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-x-4">
                  <a href="https://mk.linkedin.com/in/abdulla-civuli-42923523b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-white hover:text-blue-600 cursor-pointer">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="mailto:your-email@example.com" aria-label="Send an email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-white hover:text-blue-600 cursor-pointer">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-800/30 border-t border-gray-700/50 py-12">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div className="flex flex-col gap-2">
              <a href="#" className="text-3xl font-bold text-blue-500">AC.</a>
              <p className="text-gray-400 max-w-md text-xl">Building elegant digital solutions with a focus on user experience and technical excellence.</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </a>
              </div>
              <p className="text-base text-gray-500">© 2025 Abdulla Civuli | Built with NextJS and Tailwind</p>
            </div>
          </div>
        </div>
      </footer>

      {/* --- MODAL FOR ENLARGED IMAGE VIEW --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedImage(null)} // Close on background click
        >
          <div className="relative max-w-6xl max-h-[95vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged project view" className="w-full h-full object-contain rounded-lg shadow-2xl" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 text-white bg-gray-800/50 p-2 rounded-full hover:bg-gray-700/50 transition-colors"
              aria-label="Close image viewer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}