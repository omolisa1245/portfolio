import React from 'react'
import { FaReact } from "react-icons/fa";
import backend from '../../assets/backend.png'
import graphics from '../../assets/graphics.png'
import video from '../../assets/video.png'

const Skill = () => {
    return (
        <div className="w-full py-16 bg-stone-900"  id="Skills">

            <div className="w-[85%]">

                {/* Heading */}
                <div className="flex flex-col items-center ml-15 lg:ml-44 text-center text-white mb-22 gap-4">
                    <h5 className="text-sm tracking-widest text-orange-400 uppercase">
                        What I Offer
                    </h5>

                    <h2 className="text-3xl lg:text-4xl font-bold">
                        My Skills
                    </h2>

                    <p className="max-w-2xl text-gray-300 text-sm lg:text-base">
                        I am a versatile and results-driven Full Stack Developer, Graphic Designer, 
                        and Video Editor with a strong passion for creating impactful digital experiences. 
                        I specialize in building responsive, user-friendly web applications from concept to 
                        deployment, while also delivering visually compelling designs and high-quality video 
                        content that enhance brand identity and engagement.
                    </p>
                </div>


                {/* Cards */}
                <div className="flex flex-wrap justify-center mt-12 gap-8 ml-15 lg:ml-43">

                    {/* Frontend */}
                    <div className="bg-zinc-800 text-white p-6 rounded-xl w-[280px] shadow-lg 
                                    hover:shadow-orange-500/20 hover:-translate-y-2 
                                    transition duration-300">

                        <div className="flex items-center gap-4 mb-4">
                            <FaReact className="text-3xl text-orange-200" />
                            <span className="font-semibold">
                                Frontend <br /> Development
                            </span>
                        </div>

                        <p className="text-sm text-gray-300 mb-4">
                            Building responsive and interactive user interfaces with modern frameworks
                        </p>

                        <div className="flex gap-6 text-sm text-gray-200">
                            <ul className="space-y-1">
                                <li>React</li>
                                <li>jQuery</li>
                                <li>HTML & CSS</li>
                            </ul>

                            <ul className="space-y-1">
                                <li>Next.js</li>
                                <li>Tailwind CSS</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>
                    </div>


                    {/* Backend */}
                    <div className="bg-zinc-800 text-white p-6 rounded-xl w-[280px] shadow-lg 
                                    hover:shadow-orange-500/20 hover:-translate-y-2 
                                    transition duration-300">

                        <div className="flex items-center gap-4 mb-4">
                            <img src={backend} alt="backend"   className="w-8 brightness-0 saturate-100 invert-[48%] sepia-[88%] saturate-[749%] hue-rotate-[6deg] brightness-[103%] contrast-[101%]"  />
                            <span className="font-semibold">
                                Backend <br /> Development
                            </span>
                        </div>

                        <p className="text-sm text-gray-300 mb-4">
                            Creating robust server-side applications and RESTful APIs
                        </p>

                        <ul className="space-y-1 text-sm text-gray-200">
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>


                    {/* Graphic Design */}
                    <div className="bg-zinc-800 text-white p-6 rounded-xl w-[280px] shadow-lg 
                                    hover:shadow-orange-500/20 hover:-translate-y-2 
                                    transition duration-300">

                        <div className="flex items-center gap-4 mb-4">
                            <img src={graphics} alt="graphics"   className="w-8 brightness-0 saturate-100 invert-[48%] sepia-[88%] saturate-[749%] hue-rotate-[6deg] brightness-[103%] contrast-[101%]"  />
                            <span className="font-semibold">
                                Graphic Design
                            </span>
                        </div>

                        <p className="text-sm text-gray-300 mb-4">
                            Creating beautiful designs that are fascinating and up to modern standards
                        </p>

                        <ul className="space-y-1 text-sm text-gray-200">
                            <li>Photoshop</li>
                            <li>CorelDraw</li>
                            <li>Lunacy</li>
                        </ul>
                    </div>


                    {/* Video Editing */}
                    <div className="bg-zinc-800 text-white p-6 rounded-xl w-[280px] shadow-lg 
                                    hover:shadow-orange-500/20 hover:-translate-y-2 
                                    transition duration-300">

                        <div className="flex items-center gap-4 mb-4">
                            <img src={video} alt="video"   className="w-8 brightness-0 saturate-100 invert-[48%] sepia-[88%] saturate-[749%] hue-rotate-[6deg] brightness-[103%] contrast-[101%]"  />
                            <span className="font-semibold">
                                Video Editing
                            </span>
                        </div>

                        <p className="text-sm text-gray-300 mb-4">
                            Creating tasteful videos with modern effects and animations that wow your audience
                        </p>

                        <ul className="space-y-1 text-sm text-gray-200">
                            <li>Premiere Pro</li>
                            <li>Movavi</li>
                            <li>After Effects</li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
               

            </div>
        </div>
    )
}

export default Skill