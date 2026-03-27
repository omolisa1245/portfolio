import React from "react";
import about_img from "../../assets/about_img.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { Link } from "react-scroll";

const PDF_FILE_URL = "/OLAYEMI_OMOLISA CV.pdf"; // put file in public folder

const About = () => {
    const downloadFileAtURL = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };

    return (
        <section id="About" className="w-full px-6 md:px-12 lg:px-20 py-50 bg-stone-950 ">
            <div className="flex flex-col lg:flex-row items-center gap-12">

                {/* LEFT TEXT */}
                <div className="flex-1 space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">About Me</h3>

                    <p className="text-gray-50 leading-relaxed">
                        I'm a passionate full stack web developer and designer. I design and
                        develop modern, responsive websites, web services, and online
                        stores that deliver exceptional user experiences. My journey started
                        with basic HTML/CSS and has evolved into building complex web
                        applications using modern frameworks.
                        <br /><br />
                        When I'm not coding, I explore new technologies and share knowledge.
                        I believe in continuous learning and pushing the boundaries of what’s
                        possible on the web.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-4">

                        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition">
                            <Link
                                to="Contact"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer"
                            >
                                Contact Me
                            </Link>
                            <FaLongArrowAltRight />
                        </button>

                        <button
                            onClick={() => downloadFileAtURL(PDF_FILE_URL)}
                            className="flex items-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-medium transition"
                        >
                            Download CV
                            <LuDownload />
                        </button>

                    </div>
                </div>

                {/* RIGHT IMAGE DESIGN */}
                <div className="flex-1 flex justify-center mt-19">
                    <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] flex items-center justify-center">

                        {/* Glow background */}
                        <div className="absolute w-full h-full bg-gradient-to-br from-orange-500/30 via-purple-500/20 to-blue-500/20 blur-3xl rounded-full"></div>

                        {/* Glass card */}
                        <div className="absolute w-72 h-72 sm:w-80 sm:h-80 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl"></div>

                        {/* Rotated accent border */}
                        <div className="absolute w-80 h-80 border-2 border-orange-400/40 rotate-12 rounded-2xl"></div>

                       

                        {/* Image */}
                        <img
                            src={about_img}
                            alt="about"
                            className="relative z-10 w-[220px] sm:w-[260px] md:w-[280px] object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>


            </div>


        </section>
    );
};

export default About;