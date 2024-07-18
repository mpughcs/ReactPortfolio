import { useState, useEffect } from "react"; // Import useState from 'react'
import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiTwotoneMail } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { FaGit, FaGithub, FaReact } from "react-icons/fa";
import { PiStarFour } from "react-icons/pi";
import { TbBrandOauth } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiXcode } from "react-icons/si";

import axios from "axios";
import AdvertiserThumbnail from "@/Components/AdvertiserThumbnail";
import Project from "@/Components/Project";
import { Tooltip } from "react-tooltip";

export default function Home() {
    const [advertisers, setAdvertisers] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const initialLimit = 5; // Set the initial limit of rows to display


    const fetchAdvertisers = async () => {
        try {
            const response = await axios.get('https://us-central1-bearmvp-fa95e.cloudfunctions.net/getAdvertiserDataFromFirestore');
            setAdvertisers(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchAdvertisers();
    }, []);


    const renderAdvertisers = () => {
        const advertisersToShow = showAll ? advertisers : advertisers.slice(0, initialLimit);

        return (

            <div className="flex-col">
                <strong> Our Partners </strong>
                <div className="flex flex-wrap">
                    {advertisersToShow.map((advertiser, index) => (
                        <AdvertiserThumbnail
                            advertiser={advertiser}
                            key={advertiser.id}
                        />
                    ))}
                </div>
                <div className="flex flex-wrap">
                    <button className="text-purple-600 pb-5 " onClick={() => setShowAll(!showAll)}>
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>
        );
    };





    const [darkMode, setDarkMode] = useState(false);
    const [showLastImages, setShowLastImages] = useState(false);
    const [showNotationDesc, setShowNotationDesc] = useState(true);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title> Max Pugh </title> <meta name="description" content="Max Pugh" />
                <link rel="icon" href="images/tempImg.png" />
            </Head>
            <main className="bg-white md:px-20 dark:bg-gray-900 text-gray-700 dark:text-gray-200 duration-200 sm:px-5 p-5 ">
                <section className=" max-w-5xl mx-auto ">
                    <nav className=" my-3 flex justify-between">
                    <h2 className="text-4xl py-2 text-purple-600 ">
                            Max Gulati Pugh

                        </h2>
                        <ul className="flex items-center">

                            <span className="hover:translate-x-1 duration-100">
                                <li>
                                    <BsFillMoonStarsFill
                                        onClick={() => setDarkMode(!darkMode)}
                                        className="cursor-pointer text-xl"
                                    />
                                </li>
                            </span>
                            <span className="hover:translate-x-1 duration-100">
                                <li className=" p-1 rounded-s-xl bg-gradient-to-br from-purple-600 to-green-100 text-gray-700 ml-8 cursor-pointer lg:p-2 lg:text-xl font-mulish">
                                    <a
                                        className=" "
                                        href="https://docs.google.com/document/d/1DyBF0dT9W_1ymtLstQooa-zA4mgvvB4T73ockLD-qoo/edit?usp=sharing"
                                    >
                                        Resume
                                    </a>
                                </li>
                            </span>
                        </ul>
                    </nav>
                    <div >
                        <div >

                        </div>
                       
                        <h3 className="text-2xl py-2 md:text-3xl">Software Engineer</h3>
                        <div className="5xl flex justify-start gap-8 py-3 items-center">
                            <Image
                                src="/images/tempImg.png"
                                width={100}
                                height={100}
                                alt="Photo of Max Pugh"
                                className="rounded-full"
                            />
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
                        <p className="leading-10 md:leading-10 text-md py-5 md:text-lg max-w-5xl ">
                            I'm a Los Angeles based software developer and musician
                            originally from Saint Louis, Missouri. My creative journey has
                            given me a deep appreciation for diverse perspectives and an
                            understanding that the best solutions often come from many minds.
                        </p>
                    </div>

                    {/* Portfolio Section */}
                    <section className=" flex lg:items-start items-center lg:justify-between  pt-10 max-w-5xl mx-auto flex-col lg:flex-row ">
                        <div className="pt-8 lg:w-[50%]">
                            <a className="text-3xl py-2 font-mulish text-purple-600 flex items-center gap-4 hover:text-purple-300" href="https://giftwithbear.com/"> Gift With Bear <BiLinkExternal className="text-3xl" />
                             </a>
                            <h4 className="text-xl py-2 font-mulish"> CTO / Founding Engineer (Jan 2024 - Now) </h4>
                            <p className="text-lg md:text-lg leading-8 gap-10 py-10 max-w-5xl mx-auto">
                                At Gift With Bear, we're revolutionizing the E-commerce space by crafting a mobile application that simplifies event scheduling and gift purchasing. Our innovative approach has led to efficiently serving a vast array of<span className="text-purple-600"> over 800,000 products from top retail partners</span>, enhancing user experience with cutting-edge Mobile, Cloud, and LLM technologies.
                            </p>

                            <strong className="py-10"> Our Stack </strong>
                            <div className="flex gap-4 items pt-10 justify-around">

                                <div className="flex gap-4 flex-col">
                                    <h4 className="text-purple-600"> Frontend </h4>
                                    <span className="group">
                                        <TbBrandReactNative data-tip data-for="reactNativeTip" className="text-2xl" />
                                        <span className="group-hover:opacity-100 transition-opacity bg-gray-800  text-sm text-gray-100 rounded-md absolute opacity-0 ml-5 mx-auto">React Native</span>
                                    </span>
                                    <span className="group">
                                        <SiTypescript data-tip data-for="typescriptTip" className="text-2xl" />
                                        <span className="group-hover:opacity-100 transition-opacity bg-gray-800  text-sm text-gray-100 rounded-md absolute opacity-0 ml-5 mx-auto">TypeScript</span>
                                    </span>
                                </div>

                                <div className="flex gap-4  flex-col">
                                    <h4 className="text-purple-600"> Build </h4>
                                    <span className="group">
                                        <SiExpo data-tip data-for="expoTip" className="text-2xl" />
                                        <span className="group-hover:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute opacity-0 ml-5 mx-auto">Expo</span>
                                    </span>
                                    <span className="group">
                                        <FaGithub data-tip data-for="githubTip" className="text-2xl" />
                                        <span className="group-hover:opacity-100 transition-opacity bg-gray-800  text-sm text-gray-100 rounded-md absolute opacity-0 ml-5 mx-auto">GitHub</span>
                                    </span>
                                    <span className="group">
                                        <SiXcode data-tip data-for="xcodeTip" className="text-2xl" />
                                        <span className="group-hover:opacity-100 transition-opacity bg-gray-800  text-sm text-gray-100 rounded-md absolute opacity-0 ml-5 mx-auto">Xcode</span>
                                    </span>
                                </div>

                                <div className="flex gap-4 flex-col">
                                    <h4 className="text-purple-600"> Backend </h4>
                                    <span className="group">
                                        <SiFirebase data-tip data-for="firebaseTip" className="text-2xl" />
                                        <span className="group-hover:opacity-100 transition-opacity bg-gray-800  text-sm text-gray-100 rounded-md absolute opacity-0 ml-5 mx-auto">Firebase</span>
                                    </span>
                                    <span className="group">
                                        <SiGooglecloud data-tip data-for="googleCloudTip" className="text-2xl" />
                                        <span className="group-hover:opacity-100 transition-opacity bg-gray-800  text-sm text-gray-100 rounded-md absolute opacity-0 ml-5 mx-auto">Google Cloud Platform</span>
                                    </span>
                                    <span className="group">
                                        <FaNodeJs data-tip data-for="nodeJsTip" className="text-2xl" />
                                        <span className="group-hover:opacity-100 transition-opacity bg-gray-800  text-sm text-gray-100 rounded-md absolute opacity-0 ml-5 mx-auto">Node.js</span>
                                    </span>
                                    <span className="group">
                                        <PiStarFour data-tip data-for="starFourTip" className="text-2xl" />
                                        <span className="group-hover:opacity-100 transition-opacity bg-gray-800  text-sm text-gray-100 rounded-md absolute opacity-0 ml-5 mx-auto">Google Gemini</span>
                                    </span>
                                    <span className="group">
                                        <TbBrandOauth data-tip data-for="oAuthTip" className="text-2xl" />
                                        <span className="group-hover:opacity-100 transition-opacity bg-gray-800  text-sm text-gray-100 rounded-md absolute opacity-0 ml-5 mx-auto">OAuth2</span>
                                    </span>
                                </div>
                            </div>



                            {/* <div className="flex gap-4">
                                <button className="rounded-s-xl bg-gradient-to-br from-purple-600 to-green-100 text-gray-700 p-2 cursor-pointer lg:p-4 lg:text-xl font-mulish duration-100">
                                    <a href="https://www.giftwithbear.com"> Visit Site </a>
                                </button>
                            </div> */}

                        </div>

                        <div className=" flex ">
                            <Image
                                src={"/images/device-portrait.png"}
                                width={350}
                                height={1000}
                                className="md:w-[40%] md:min-w-[460px] w-[200px] h-full"

                            />
                            {/* conditionall render a second image on smaller screens */}
                            <Image
                                src={"/images/device.webp"}
                                width={250}
                                height={250}
                                className="rounded-3xl block md:hidden w-[250px] h-full"
                            />
                        </div>
                    </section>
                    <div className="flex gap-4 flex-col ">
                        <div className="flex gap-4 flex-wrap">
                            {renderAdvertisers()}
                        </div>
                    </div>


                    <div className="max-w-5xl pt-4 px-xl m-auto relative">
                        <h3 className="text-3xl py-2 font-mulish"> Portfolio </h3>
                        <p className="text-lg md:text-lg leading-8 gap-10 py-10 max-w-5xl mx-auto">
                            From crafting <span className="text-purple-600">interactive user interfaces</span> to building <span className="text-purple-600">robust server-side logic</span>, I've got the full stack covered. Most recently, I've been using Java with <span className="text-purple-600">Spring Boot</span> and <span className="text-purple-600">AWS</span> to build <span className="text-purple-600">RESTful APIs</span>. I'm also experienced with <span className="text-purple-600">React</span> and <span className="text-purple-600">Next.js</span> for front-end development. I'm always looking to learn new technologies and expand my skillset.
                        </p>






                        <div className="flex flex-col gap-10 pt-10 lg:flex-row lg:flex-wrap">
                            {/* notation UI */}
                            <Project src="/images/gamestore.png" Title="Gamestore" Description="Netflix Bootcamp Final Project" link="https://github.com/mpughcs/FullStackGameStore/tree/main" />
                            <Project src="/images/notation1.png" Title="Notation" Description="A full stack desktop application for musicians" link="https://github.com/mpughcs/Notation" />


                            {/* Sunday Mourners site */}
                            <Project src="/images/mourners.png" Title="Sunday Mourners" Description="A band website built with React and Tailwind" link="https://sundaymourners.com/" />

                            {/* full stack site */}
                            {showLastImages && (
                                <>
                                    <Project src="/images/swagger.png" Title="Swagger API" Description="A Spring Boot API with Swagger Documentation" link="hover:translate-x-1 duration-100" />
                                    <Project src="/images/notation.gif" Title="Notation CLI" Description="A command line interface for the Notation app" link="https://github.com/mpughcs/Notation" />
                                </>
                            )}


                        </div>
                        {/* More Projects Button */}
                        <div className="py-3 duration-100">
                            <button
                                className="hover:translate-x-1 rounded-s-xl bg-gradient-to-br from-purple-600 to-green-100 text-gray-700 p-2 cursor-pointer lg:p-4 lg:text-xl font-mulish duration-100"
                                onClick={() => setShowLastImages(!showLastImages)}
                            >
                                {showLastImages ? "Less Projects" : "More Projects"}
                            </button>
                        </div>


                    </div>



                    <div className="py-10 max-w-5xl mx-auto ">
                        <h3 className="text-3xl font-mulish"> Services I Offer </h3>
                        <p className="text-md py-5 leading-8 dark: md:text-xl max-w-5xl">

                        </p>


                        {/* cards */}
                        <div className="xl:flex gap-12 justify-evenly mx-auto ">
                            {/* developer card */}
                            <div className="text-center shadow-lg p-6 rounded-xl my-10 dark:bg-gray-800 ">
                                <Image
                                    src="/images/coding.png"
                                    width={160}
                                    height={160}
                                    alt="Photo of a developer tools"
                                    className=" mx-auto"
                                />
                                <h3 className="text-lg font-medium pt-8 pb-2"> Software </h3>
                                <p className="py-2 max-w-sm mx-auto h-[100px]">
                                    I'm always learning new frameworks and languages, but here are
                                    a few of my favorites
                                </p>
                                <h4 className="text-purple-600"> Technolgies I use: </h4>
                                <div className=" gap-2 py-3 flex justify-evenly">
                                    <div className="">
                                        <h3 className="text-purple-600"> Frontend </h3>
                                        <ul>
                                            <li> ReactJs </li> <li> Next.js </li> <li> React Native </li> <li> Tailwind </li>
                                        </ul>
                                    </div>
                                    <div className="">
                                        <h3 className="text-purple-600"> Backend </h3>
                                        <ul>
                                        <li> TypeScript </li> <li> Spring Boot </li> <li> Node.js </li> <li> MySql </li>
                                        </ul>
                                    </div>
                                    <div className="">
                                        <h3 className="text-purple-600"> Scripting </h3>
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
                                    width={190}
                                    height={150}
                                    className=" mx-auto"
                                    alt="Photo of a design tools"
                                />
                                <h3 className="text-lg font-medium pt-8 pb-2"> Design </h3>
                                <p className="py-2 max-w-xs mx-auto  h-[100px]">
                                    Some of the design tools I use for web, print, and video.

                                </p>
                                <h4 className="text-purple-600"> Technolgies I use: </h4>
                                <div className=" gap-8 py-3 flex justify-evenly">
                                    <div className="">
                                        <h3 className="text-purple-600"> Design </h3>
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
                                    width={140}
                                    height={160}
                                    className=" mx-auto "
                                    alt="photo of rocket ship"
                                />
                                <h3 className="text-lg font-medium pt-8 pb-2"> And Beyond! </h3>
                                <p className="py-2 max-w-xs mx-auto h-[100px]">
                                    Whether I'm writing code or scoring a film, I use these tools every day
                                </p>
                                <h4 className="text-purple-600"> Technolgies I use: </h4>
                                <div className=" gap-8 py-3 flex justify-evenly">
                                    <div className="">
                                        <h3 className="text-purple-600"> Misc </h3>
                                        <ul>
                                            <li> Logic Pro X </li> <li> Unity  </li> <li> Trello  </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
}
