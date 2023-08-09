
import { useState } from 'react';  // Import useState from 'react'
import Image from 'next/image';
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub , AiTwotoneMail} from 'react-icons/ai';


export default function Home() {
  
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
      <title>My portfolio</title>
      <meta name="description" content="My portfolio" />
      <link rel="icon" href="images/tempImg.png" />


      </Head>
      <main className='bg-white md:px-20 dark:bg-gray-900 text-gray-700 dark:text-gray-200 duration-200 sm:px-5 p-5 '>
        <section className=" min-h-screen ">
          <nav className=' mb-12 flex justify-between'>
            <h1 className='font-mulish text-4xl md:text-5xl dark:text-gray-200 text-gray-600'>max pugh</h1>
            <ul className='flex items-center'>
              <span className='hover:translate-x-1 duration-100 '><li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-xl'/></li></span>
              <span className='hover:translate-x-1 duration-100'><li className=' p-2 rounded-s-xl bg-gradient-to-br from-green-400 to-green-100 text-gray-700 ml-8 cursor-pointer lg:p-4 lg:text-xl font-mulish'><a className="bg-cyan " href='https://docs.google.com/document/d/1ltW_z3f44Tk6u_A94l-yRu90Wby3NKEd6uH4IcWg3Pc/edit?usp=sharing'>Resume</a></li></span>
              
            </ul>
          </nav>
          <div className='text-center pt-10 sm:px-10 '>
            <h2 className='text-5xl py-2 text-green-400 font-medium md:text-6xl'>Max Gulati Pugh</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Software Engineer</h3>
            <p className='leading-10 md:leading-10 text-md py-5 md:text-xl sm:max-w-4xl mx-auto'> 
            I'm a Los Angeles based software developer and musician orignally from Saint Louis, Missouri. I am enthusiastic about learning many areas of development and enjoy combining my passions of music, technology and design to create new and interesting things to share with others.


              </p>
          </div>
          <div className='5xl flex justify-center gap-8 py-3'>
            <a href='https://www.linkedin.com/in/max-pugh/'><AiFillLinkedin className='text-4xl hover:scale-110 duration-200 hover:animate-pulse'/></a>
            <a href='https://github.com/mpughcs'><AiFillGithub className='text-4xl hover:scale-110 duration-200 hover:animate-pulse'/></a>
            <a href='mailto:maxgpugh01@gmail.com'><AiTwotoneMail className='text-4xl hover:scale-110 duration-200 hover:animate-pulse'/></a>
          </div>
          <div className='py-10'>
            <Image src='/images/tempImg.png' width={300} height={300} className='rounded-full mx-auto md:h-96 md:w-96'/>
          </div>
          <div>
          <h3 className='text-2xl py-2'>Services I Offer</h3>
            <p className='text-md py-5 leading-8 dark: md:text-xl max-w-4xl'>Creating from start to finish is my passion</p>
          </div>

          <div className='xl:flex gap-12 justify-evenly'>
            
          {/* developer card */}
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 '>
            <Image src = '/images/coding.png' width={200} height={200} className=' mx-auto'/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Software</h3>
            <p className='py-2 max-w-s mx-auto'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,</p>
            <h4 className='text-green-400'>Technolgies I use:</h4>
            <div className=' gap-8 py-3 flex justify-evenly'>
              <div className=''>
                <h3 className='text-green-400'>Frontend</h3>
                <ul>
                  <li>ReactJs</li>
                  <li>Next.js</li>
                  <li>Tailwind</li>
                </ul>
              </div>
              <div className=''>
                <h3 className='text-green-400'>Backend</h3>
                <ul>
                  <li>Spring Boot</li>
                  <li>Node.js</li>
                  <li>MySql</li>
                  
                </ul>
                </div>
                <div className=''>
                <h3 className='text-green-400'>Scripting</h3>
                <ul>
                  <li>Python</li>
                  <li>C++</li>
                  <li>Java</li>
                </ul>
              </div>

            </div>
            
          </div>
    {/* design card */}
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 '>
            <Image src = '/images/design.png' width={250} height={250}  className='pb-4 mx-auto'/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Design</h3>
            <p className='py-2 max-w-s'>I love making things look nice! I have been designing websites since highschool and have designed iconogrophy </p>
            <h4 className='text-green-400'>Technolgies I use:</h4>
            <div className=' gap-8 py-3 flex justify-evenly'>
              <div className=''>
                <h3 className='text-green-400'>Frontend</h3>
                <ul>
                  <li>Adobe Illustrator</li>
                  <li>Adobe XD</li>
                  <li>Adobe Premier</li>
                </ul>
              </div>
              
            </div>
            
          </div>
      {/* beyond card */}
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800'>
            <Image src = '/images/beyond.png' width={200} height={200} className=' mx-auto '/>
            <h3 className='text-lg font-medium pt-8 pb-2'>And Beyond!</h3>
            <p className='py-2 max-w-s'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,</p>
            <h4 className='text-green-400'>Technolgies I use:</h4>
            <div className=' gap-8 py-3 flex justify-evenly'>
              <div className=''>
                <h3 className='text-green-400'>Frontend</h3>
                <ul>
                  <li>Unity</li>
                  <li>Next.js</li>
                  <li>Tailwind</li>
                </ul>
              </div>
              <div className=''>
                <h3 className='text-green-400'>Backend</h3>
                <ul>
                  <li>Spring Boot</li>
                  <li>Node.js</li>
                  <li>MySql</li>
                </ul>
                </div>
                
            </div>
            
          </div>
          </div>
          <div className='max-w-6xl pt-4 px-xl m-auto'>
             <h3 className='text-2xl py-2'>Portfolio</h3>
              <p className='text-md md:text-md py-5 leading-8  mx-auto '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut!  </p>
          </div>

          <div className=' flex flex-col gap-10 py-10 lg:flew-row lg-flex-wrap max-w-6xl mx-auto'>
          <div className='basis-1/3 flex-1'>
            <Image src='/images/mourners.png' width={1200} height={1200} layout='responsive'  className='mx-auto  rounded-3xl object-cover'/>
            </div>
          <div className='basis-1/3 flex-1'>
            <Image src='/images/notation1.png' width={1200} height={1200} layout='responsive' className='mx-auto rounded-3xl object-cover'/>
            </div>
          {/* <div className='basis-1/3 flex-1'>
            <Image src='/images/dance.jpeg' width={1200} height={1200}  layout='responsive' className='mx-auto rounded-3xl object-cover'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src='/images/swagger.png' width={1200} height={1200}  layout='responsive' className='mx-auto rounded-3xl object-cover'/>
          </div> */}

          </div>
          

          


        </section>
      </main>
        
    </div>
    
    
  )
}
 