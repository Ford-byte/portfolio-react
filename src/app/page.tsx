"use client";
import About from "./blocks/about";
import Project from "./blocks/project";
import staticData from "../../static/gallery.json";
import Skills from "./blocks/skills";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const scrollToRef = useRef(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const scrollToSection = () => {
    if (scrollToRef.current) {
      if (isScrolledDown) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      setIsScrolledDown(!isScrolledDown);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="pt-12 px-4 md:px-0">
      <div className="relative w-full justify-center flex">
        <div className="h-[400px] flex justify-end items-center container-block">
          <div className="w-full flex md:justify-between justify-center">
            <div className="flex flex-col justify-center text-center items-center md:items-start">
              <h1 className="text-[75px] font-serif font-bold text-[#515769] w-full flex justify-center text-center items-center">
                Clifford Jay
              </h1>
              <div className="py-4">
                <h1 className="text-[25px] text-gray-400">
                  Software Developer
                </h1>
              </div>
              <div className="flex pt-4 w-full gap-6 justify-center md:justify-start">
                <div className="flex items-center">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-gray-400 hover:text-[#515769] hover:cursor-pointer"
                  >
                    <g>
                      <path d="M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387   c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416   C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237   c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93   c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23   C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23   c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921   c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576   c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z" />
                      <path d="M4.545,17.526c-0.026,0.06-0.12,0.078-0.206,0.037c-0.087-0.039-0.136-0.121-0.108-0.18   c0.026-0.061,0.12-0.078,0.207-0.037C4.525,17.384,4.575,17.466,4.545,17.526L4.545,17.526z" />
                      <path d="M5.031,18.068c-0.057,0.053-0.169,0.028-0.245-0.055c-0.079-0.084-0.093-0.196-0.035-0.249   c0.059-0.053,0.167-0.028,0.246,0.056C5.076,17.903,5.091,18.014,5.031,18.068L5.031,18.068z" />
                      <path d="M5.504,18.759c-0.074,0.051-0.194,0.003-0.268-0.103c-0.074-0.107-0.074-0.235,0.002-0.286   c0.074-0.051,0.193-0.005,0.268,0.101C5.579,18.579,5.579,18.707,5.504,18.759L5.504,18.759z" />
                      <path d="M6.152,19.427c-0.066,0.073-0.206,0.053-0.308-0.046c-0.105-0.097-0.134-0.234-0.068-0.307   c0.067-0.073,0.208-0.052,0.311,0.046C6.191,19.217,6.222,19.355,6.152,19.427L6.152,19.427z" />
                      <path d="M7.047,19.814c-0.029,0.094-0.164,0.137-0.3,0.097C6.611,19.87,6.522,19.76,6.55,19.665   c0.028-0.095,0.164-0.139,0.301-0.096C6.986,19.609,7.075,19.719,7.047,19.814L7.047,19.814z" />
                      <path d="M8.029,19.886c0.003,0.099-0.112,0.181-0.255,0.183c-0.143,0.003-0.26-0.077-0.261-0.174c0-0.1,0.113-0.181,0.256-0.184   C7.912,19.708,8.029,19.788,8.029,19.886L8.029,19.886z" />
                      <path d="M8.943,19.731c0.017,0.096-0.082,0.196-0.224,0.222c-0.139,0.026-0.268-0.034-0.286-0.13   c-0.017-0.099,0.084-0.198,0.223-0.224C8.797,19.574,8.925,19.632,8.943,19.731L8.943,19.731z" />
                    </g>
                  </svg>
                </div>
                <div>
                  <svg
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-gray-400 hover:text-[#515769] hover:cursor-pointer"
                  >
                    <g>
                      <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
                    </g>
                  </svg>
                </div>
                <div>
                  <svg
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-gray-400 hover:text-[#515769] hover:cursor-pointer"
                  >
                    <path
                      id="Logo_00000038394049246713568260000012923108920998390947_"
                      d="M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636  c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071  c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084  c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616  C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705  c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724  C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full text-[#3c3e46]"
              >
                <path d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {isScrolledDown && (
        <div
          className="fixed right-12 bottom-12"
          onClick={() => {
            scrollToSection();
          }}
        >
          <div className="text-sm font-semibold text-gray-600 bg-gray-400 px-3 py-4 rounded-full animate-bounce hover:cursor-pointer">
            TOP
          </div>
        </div>
      )}
      <div id="About" ref={scrollToRef}>
        <About />
      </div>
      <div className="flex justify-center" id="skills">
        <div className="container-block grid grid-cols-1 md:grid-cols-4 gap-6 my-12 md:px-12 md:py-4">
          <Skills
            logo={
              <svg
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="currentColor"
                className="text-gray-400 "
              >
                <path d="m24 11v12a1 1 0 0 1 -2 0v-5h-20v5a1 1 0 0 1 -2 0v-10.5a5.5 5.5 0 0 1 11 0v3.5h3v-5a3 3 0 0 1 3-3h1v2a1 1 0 0 0 2 0v-2h1a3 3 0 0 1 3 3zm-15-7.5a3.5 3.5 0 1 0 -3.5 3.5 3.5 3.5 0 0 0 3.5-3.5z" />
              </svg>
            }
            title="Production Engineering"
            desc="Dealing with site reliability using cloud and data center models."
          />
          <Skills
            logo={
              <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="currentColor"
                className="text-gray-400 "
              >
                <path d="m20.693,5.109c-2.731,4.647-9.967,13.024-18.97,14.375-.076.012-.15.017-.225.017-.73,0-1.37-.533-1.481-1.277-.123-.819.441-1.583,1.261-1.706,7.74-1.161,14.21-8.674,16.643-12.624l-1.618-.71c-.665-.292-.646-1.242.031-1.506L20.372.101c.599-.234,1.273.062,1.507.661l1.575,4.038c.264.677-.422,1.335-1.087,1.043l-1.674-.734ZM0,6C0,2.691,2.691,0,6,0s6,2.691,6,6-2.691,6-6,6S0,9.309,0,6Zm4-2c0,1.105.895,2,2,2s2-.895,2-2-.895-2-2-2-2,.895-2,2Zm-.966,4.66c.733.816,1.784,1.34,2.966,1.34s2.233-.524,2.966-1.34c-.618-.993-1.71-1.66-2.966-1.66s-2.348.667-2.966,1.66Zm19.466.34c-.829,0-1.5.672-1.5,1.5v12c0,.828.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-12c0-.828-.671-1.5-1.5-1.5Zm-5,4c-.829,0-1.5.672-1.5,1.5v8c0,.828.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-8c0-.828-.671-1.5-1.5-1.5Zm-5,4c-.829,0-1.5.672-1.5,1.5v4c0,.828.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-4c0-.828-.671-1.5-1.5-1.5Zm-5,3c-.829,0-1.5.672-1.5,1.5v1c0,.828.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-1c0-.828-.671-1.5-1.5-1.5Zm-6.5,2.5c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5,1.5Z" />
              </svg>
            }
            title="Software Development"
            desc="Dealing with site reliability using cloud and data center models."
          />
          <Skills
            logo={
              <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="currentColor"
                className="text-gray-400 "
              >
                <path d="m18.5,16c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Zm-6.5-8c-2.206,0-4-1.794-4-4S9.794,0,12,0s4,1.794,4,4-1.794,4-4,4Zm-6.5,8c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Zm5.5,8v-3c0-1.629-1.3-2.947-2.918-2.992l-2.582,2.992-2.621-2.988c-1.6.065-2.879,1.372-2.879,2.988v3m24,0v-3c0-1.629-1.3-2.947-2.918-2.992l-2.582,2.992-2.621-2.988c-1.6.065-2.879,1.372-2.879,2.988v3" />
              </svg>
            }
            title="Teamwork"
            desc="Dealing with site reliability using cloud and data center models."
          />
          <Skills
            logo={
              <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="currentColor"
                className="text-gray-400 "
              >
                <path d="m23.959,22.545l-2.792-2.792c.524-.791.833-1.736.833-2.753,0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5c1.017,0,1.962-.309,2.753-.833l2.792,2.792,1.414-1.414Zm-13.959-5.545c0-1.075.25-2.09.683-3h-1.683v-2h2v1.408c1.223-2.039,3.449-3.408,6-3.408.183,0,.362.014.542.027L12.619,1.531C12.063.573,11.07,0,9.962,0c-1.108,0-2.103.572-2.66,1.53L.422,13.381c-.56.962-.562,2.113-.007,3.078.556.965,1.552,1.541,2.664,1.541h7.001c-.047-.327-.08-.66-.08-1Zm-1-12h2v5h-2v-5Z" />
              </svg>
            }
            title="Problem Solving"
            desc="Dealing with site reliability using cloud and data center models."
          />
        </div>
      </div>
      <div id="projects" ref={scrollToRef}>
        <Project propsData={staticData} />
      </div>
    </section>
  );
}
