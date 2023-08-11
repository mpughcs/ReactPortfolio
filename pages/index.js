import { useState } from "react"; // Import useState from 'react'
import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiTwotoneMail } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [showLastImages, setShowLastImages] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title> Max Pugh </title> <meta name="description" content="Max Pugh" />
                <link rel="icon" href="images/tempImg.png" />
            </Head>
            <main className="bg-white md:px-20 dark:bg-gray-900 text-gray-700 dark:text-gray-200 duration-200 sm:px-5 p-5">
                <section className=" min-h-screen ">
                    <nav className=" mb-12 flex justify-between">
                        <h1 className="font-mulish text-4xl md:text-5xl dark:text-gray-200 text-gray-600">
                            max pugh
                        </h1>
                        <ul className="flex items-center">
                            <span className="hover:translate-x-1 duration-100 ">
                                <li>
                                    <BsFillMoonStarsFill
                                        onClick={() => setDarkMode(!darkMode)}
                                        className="cursor-pointer text-xl"
                                    />
                                </li>
                            </span>
                            <span className="hover:translate-x-1 duration-100">
                                <li className=" p-2 rounded-s-xl bg-gradient-to-br from-green-400 to-green-100 text-gray-700 ml-8 cursor-pointer lg:p-4 lg:text-xl font-mulish">
                                    <a
                                        className=" "
                                        href="https://docs.google.com/document/d/1ltW_z3f44Tk6u_A94l-yRu90Wby3NKEd6uH4IcWg3Pc/edit?usp=sharing"
                                    >
                                        Resume
                                    </a>
                                </li>
                            </span>
                        </ul>
                    </nav>
                    <div className="text-center pt-10 sm:px-10 ">
                        <h2 className="text-5xl py-2 text-green-400 font-medium md:text-6xl">
                            Max Gulati Pugh
                        </h2>
                        <h3 className="text-2xl py-2 md:text-3xl">Software Engineer</h3>
                        <p className="leading-10 md:leading-10 text-md py-5 md:text-xl sm:max-w-4xl mx-auto">
                            I'm a Los Angeles based software developer and musician
                            originally from Saint Louis, Missouri. My creative journey has
                            given me a deep appreciation for diverse perspectives,
                            understanding that the best solutions often come from many minds.
                        </p>
                    </div>
                    <div className="5xl flex justify-center gap-8 py-3">
                        <a href="https://www.linkedin.com/in/max-pugh/">
                            <AiFillLinkedin className="text-4xl hover:scale-110 duration-200 hover:animate-pulse" />
                        </a>
                        <a href="https://github.com/mpughcs">
                            <AiFillGithub className="text-4xl hover:scale-110 duration-200 hover:animate-pulse" />
                        </a>
                        <a href="mailto:maxgpugh01@gmail.com">
                            <AiTwotoneMail className="text-4xl hover:scale-110 duration-200 hover:animate-pulse" />
                        </a>
                    </div>
                    <div className="py-10">
                        <Image
                            src="/images/tempImg.png"
                            width={300}
                            height={300}
                            alt="Photo of Max Pugh"
                            className="rounded-full mx-auto md:h-96 md:w-96"
                        />
                    </div>

                    <div className="max-w-6xl pt-4 px-xl m-auto ">
                        <h3 className="text-3xl py-2 font-mulish"> Portfolio </h3>
                        <p className="text-lg md:text-lg leading-8 gap-10 py-10 max-w-6xl mx-auto">
                            From crafting <span className="text-green-500">interactive user interfaces</span> to building <span className="text-green-500">robust server-side logic</span>, I've got the full stack covered. Most recently, I've been using Java with <span className="text-green-500">Spring Boot</span> and <span className="text-green-500">AWS</span> to build <span className="text-green-500">RESTful APIs</span>. I'm also experienced with <span className="text-green-500">React</span> and <span className="text-green-500">Next.js</span> for front-end development. I'm always looking to learn new technologies and expand my skillset.
                        </p>

                        <div className="basis-1/3 flex-1 py-5">
                            <div className="hover:translate-x-1 duration-100">
                                <a href="https://sundaymourners.com/">
                                    <BiLinkExternal className="text-2xl text-green-400 absolute translate-y-5 translate-x-4" />
                                </a>
                            </div>
                           
                            <Image
                                src="/images/notation1.png"
                                width={1200}
                                alt="Photo of the Notation desktop app "
                                height={1200}
                                layout="responsive"
                                className="mx-auto rounded-3xl object-cover"
                            />
                        </div>
                        <div className="basis-1/3 flex-1 py-5">
                            <div className="hover:translate-x-1 duration-100">
                                <a href="https://github.com/mpughcs/Notation">
                                    <BiLinkExternal className="text-2xl text-green-400 absolute translate-y-5 translate-x-4" />
                                </a>
                            </div>
                            <Image
                                src="/images/mourners.png"
                                width={1200}
                                alt="Photo of the webpage for band Sunday Mourners"

                                height={1200}
                                layout="responsive"
                                className="mx-auto  rounded-3xl object-cover"
                            />
                            
                        </div>

                        {showLastImages (
                            <div className="basis-1/3 flex-1 py-5">
                                <div className="hover:translate-x-1 duration-100">
                                    <a href="https://github.com/mpughcs/Max_Pugh_Java/tree/main/Summative-2-Pugh-Max">
                                        <BiLinkExternal className="text-2xl text-green-400 absolute translate-y-5 translate-x-4" />
                                    </a>
                                </div>
                                <Image
                                    src="/images/swagger.png"
                                    width={1200}
                                    height={1200}
                                    alt="Photo of the swagger documentation for a spring api"
                                    layout="responsive"
                                    className="mx-auto rounded-3xl object-cover"
                                />
                            </div>
                        )}
                        {showLastImages && (
                            <div className="basis-1/3 flex-1 py-5">
                                <div className="hover:translate-x-1 duration-100">
                                    <a href="https://github.com/mpughcs/Notation">
                                        <BiLinkExternal className="text-2xl text-green-400 absolute translate-y-5 translate-x-4" />
                                    </a>
                                </div>
                                <Image
                                    src="/images/notation.gif"
                                    width={1200}
                                    height={1200}
                                    alt="gif of the Notation CLI tool"

                                    layout="responsive"
                                    className="mx-auto rounded-3xl object-cover"
                                />
                            </div>
                        )}
                        <div className="flex justify-end hover:translate-x-1 duration-100">
                            <button
                                className="p-2  rounded-s-xl left-full bg-gradient-to-br from-green-400 to-green-100 text-gray-700 ml-8 cursor-pointer lg:p-4 lg:text-xl font-mulish"
                                onClick={() => setShowLastImages(!showLastImages)}
                            >
                                {showLastImages ? "Less Project" : "More Projects"}
                            </button>
                        </div>
                    </div>

                    <div className="sm:py-10">
                        <h3 className="text-3xl font-mulish"> Services I Offer </h3>
                        <p className="text-md py-5 leading-8 dark: md:text-xl max-w-6xl">
                            As I near the completion of my CS degree in the winter of 2023, 
                            I'm eager to put my skills to use with a forward thinking team of creative
                            developers. I'm currently looking for a full time software engineering position
                             for January 2024. If you're interested in working together, lets connect! You can always reach me <span className="text-green-500"> <a href="mailto:maxgpugh01@gmail.com">here</a></span>
                            
                            
                        </p>
                    </div>

                    {/* cards */}
                    <div className="xl:flex gap-12 justify-evenly ">
                        {/* developer card */}
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 ">
                            <Image
                                src="/images/coding.png"
                                width={200}
                                height={200}
                                className=" mx-auto"
                            />
                            <h3 className="text-lg font-medium pt-8 pb-2"> Software </h3>
                            <p className="py-2 max-w-sm mx-auto">
                                I'm always learning new frameworks and languages, but here are
                                a few of my favorites
                            </p>
                            <h4 className="text-green-400"> Technolgies I use: </h4>
                            <div className=" gap-8 py-3 flex justify-evenly">
                                <div className="">
                                    <h3 className="text-green-400"> Frontend </h3>
                                    <ul>
                                        <li> ReactJs </li> <li> Next.js </li> <li> Tailwind </li>
                                    </ul>
                                </div>
                                <div className="">
                                    <h3 className="text-green-400"> Backend </h3>
                                    <ul>
                                        <li> Spring Boot </li> <li> Node.js </li> <li> MySql </li>
                                    </ul>
                                </div>
                                <div className="">
                                    <h3 className="text-green-400"> Scripting </h3>
                                    <ul>
                                        <li> Python </li> <li> C++ </li> <li> Java </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* design card */}
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 ">
                            <Image
                                src="/images/design.png"
                                width={250}
                                height={250}
                                className="pb-4 mx-auto"
                            />
                            <h3 className="text-lg font-medium pt-8 pb-2"> Design </h3>
                            <p className="py-2 max-w-xs mx-auto">
                                Some of the design tools I use for web, print, and video. 
                                
                            </p>
                            <h4 className="text-green-400"> Technolgies I use: </h4>
                            <div className=" gap-8 py-3 flex justify-evenly">
                                <div className="">
                                    <h3 className="text-green-400"> Design </h3>
                                    <ul>
                                        <li> Adobe Illustrator </li> <li> Adobe XD </li>
                                        <li> Adobe Premier </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* beyond card */}
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
                            <Image
                                src="/images/beyond.png"
                                width={200}
                                height={200}
                                className=" mx-auto "
                            />
                            <h3 className="text-lg font-medium pt-8 pb-2"> And Beyond! </h3>
                            <p className="py-2 max-w-xs mx-auto">
                                Whether I'm writing code or scoring a film, I use these tools every day
                            </p>
                            <h4 className="text-green-400"> Technolgies I use: </h4>
                            <div className=" gap-8 py-3 flex justify-evenly">
                                <div className="">
                                    <h3 className="text-green-400"> Misc </h3>
                                    <ul>
                                        <li> Logic Pro X </li> <li> Unity  </li> <li> Trello  </li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    
                </section>
            </main>
        </div>
    );
}
