
//import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <>
    {/* <Header/>*/}
    <div class="bg-gradient-to-b from-green-50 to-green-100">
    <header class="">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex-shrink-0">
                    <a href="#" title="" class="flex">
                        <img class="w-auto h=90" src="favicon.ico" alt=" " />
                    </a>
                </div>

                <button type="button" class="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                    
                    <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    
                    <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div class="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                    <a href="#" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Home </a>

                    <a href="#About" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> About Us </a>

                     <a href="#Blog" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Blogs </a>

                    <a href="#MyProject" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Projects</a>

                    <a href="#Gallery" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Gallery</a>

                    <a href="Achivements" title="" class="text-base font-semibold  text-black transition-all duration-200 hover:text-opacity-80">Achivements</a>

                    <div class="w-px h-5 bg-black/20"></div>

                    <a href="#Skills" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> skills </a>

                    <a href="#Contact" title="" class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Contact Me </a>
                </div>
            </div>
        </div>
    </header>

    <section class="py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                        SUBHANKARI
                        <div class="relative inline-flex">
                            <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                            <h1 class="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">MY Portfolio</h1>
                        </div>
                    </h1>

                    <p class="mt-8 text-base text-black sm:text-xl">welcome to my portfolio!!!</p>

                    <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button"> Start exploring </a>

                        <a href="#" title="" class="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                            <svg class="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path fill="#F97316" stroke="#F97316" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                    
                        </a>
                    </div>
                </div>

                <div>
                    <img class="w-full h-90" src="songpic.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>


{/*...................................about.......................................*/}
<section class="py-10 bg-white sm:py-16 lg:py-24" id="About">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div class="pr-12 sm:pr-0">
                <div class="relative max-w-xs mb-12">
                    <img class="object-bottom rounded-md" src="respic.jpg" alt="" />

                    <img class="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src="" alt="" />
                </div>
            </div>

            <div>
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">About me....</h2>
                <p class="mt-4 text-base leading-relaxed text-gray-600"> Subhankari Das 🌸

A dreamer at heart, with a coder’s mind,
In lines of logic, my joy I find.
Daughter of strength, of grace and light,
Puspa and Saraswati, my guiding might.

From crafts and dance to AI’s spark,
I chase each dream, I leave my mark.
With passion I build, with purpose I grow,
In every challenge, I learn and glow. </p>
            </div>
        </div>
    </div>
</section>
{/*........................................skill..............................*/}


       

<section class="py-10 bg-gray-100 sm:py-16 lg:py-24" id="Skills">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">  <span class="text-blue-600">SKILLS</span> </h2>
        </div>

        <div class="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div class="overflow-hidden bg-white rounded-md shadow">
                <div class="px-8 py-12">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="c download.jpg" alt="" />
                        <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="mt-7">
                        <p class="text-lg text-black">“C was created at bell labrotories in the early 1970s by ken thompson and dennis ritchie.it was designed to provide programmers with a more user-friendly set of instractionsfor the UNIX operating system.”</p>
                    </blockquote>
                    <p class="text-base font-semibold tex-tblack mt-9">DENNIS RITCHIE</p>
                    <p class="mt-1 text-base text-gray-600"></p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md shadow">
                <div class="px-8 py-12">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="javadownload.png" />
                        <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="mt-7">
                        <p class="text-lg text-black">“Java is a multiplatform, object-oriented programming language that's used to create software applications and programs. It's used to power many well-known programs, including smartphone operating systems, enterprise software, and applications.”</p>
                    </blockquote>
                    <p class="text-base font-semibold tex-tblack mt-9">JAMES GOSLING</p>
                    <p class="mt-1 text-base text-gray-600"></p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md shadow">
                <div class="px-8 py-12">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="js download.png" alt="" />
                        <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="mt-7">
                        <p class="text-lg text-black">“JavaScript (JS) is a programming language used to create interactive web pages. It's a lightweight, text-based, object-oriented language that can be used on both the client and server side. JS is a key part of modern programming languages and is known for being versatile, flexible, and easy to use.”</p>
                    </blockquote>
                    <p class="text-base font-semibold tex-tblack mt-9">BRENDAN EICH</p>
                    <p class="mt-1 text-base text-gray-600"></p>
                </div>
            </div>
        </div>
    </div>
</section>




{/*.........................my poject................................*/}

<section class="py-10 bg-white sm:py-16 lg:py-24" id="MyProject">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">My Project</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">welcome to my project.</p>
        </div>

        <div class="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
            <div>
                <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                    <img class="object-cover w-full h-full" src="tic tactoe.webp" alt="" />
                </a>
                <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> TIC-TAC-TOE </span>
                <p class="mt-6 text-xl font-semibold">
                    <a href="#" title="" class="text-black"> Project Title: Tic Tac Toe game
 </a>
                </p>
                <p class="mt-4 text-gray-600">
Description:
Tic Tac Toe is a classic two-player game developed using basic programming concepts. The game features a 3×3 grid where players alternately place X and O, aiming to align three symbols in a row — horizontally, vertically, or diagonally. This project showcases user interaction, logical decision-making, and real-time game status updates. It enhances understanding of condition checks, loops, and interface design.</p>
                <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase">  </span>
            </div>

            <div>
                <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                    <img class="object-cover w-full h-full" src="portfolio.webp" alt="" />
                </a>
                <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Portfolio</span>
                <p class="mt-6 text-xl font-semibold">
                    <a href="#" title="" class="text-black"> Project Title: My Portfolio </a>
                </p>
                <p class="mt-4 text-gray-600">Description:
This project is a personal portfolio website designed to showcase my skills, projects, achievements, and professional background. Built using HTML, CSS, JavaScript, and ReactJS, the website features a clean and responsive design. It serves as an online resume, helping recruiters and collaborators learn more about my work, technical abilities, and contact information.</p>
                <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase">  </span>
            </div>

            <div>
                <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                    <img class="object-cover w-full h-full" src="facebook.webp" alt="" />
                </a>
                <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> facebook clone</span>
                <p class="mt-6 text-xl font-semibold">
                    <a href="#" title="" class="text-black"> project Title: Facebook Clone </a>
                </p>
                <p class="mt-4 text-gray-600">Description:
The Facebook Clone is a social networking web application that replicates the core features of Facebook. It allows users to sign up, create profiles, post status updates, share photos, like and comment on posts, and connect with other users through friend requests. The project is built using modern web technologies such as HTML, CSS, JavaScript, React for the frontend, and Node.js with MongoDB or Firebase for the backend. The goal is to understand the functionality of real-time social platforms and practice full-stack development skills. </p>
                <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase">  </span>
            </div>
        </div>
    </div>
</section>

{/*.................................gallery.............................*/}
<section class="py-10 bg-gray-50 sm:py-16 lg:py-24" id="Gallery">
<div class="max-w-2xl mx-auto text-center" >
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Gallery</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">welcome to my Gallery.</p>
        </div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="r1.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="r2.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="r3.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="r4.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="r5.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="r6.jpg"
      alt=""
    />
  </div>
</div>
</section>









{/*.................................Achivements.............................*/}
<section class="py-10 bg-gray-50 sm:py-16 lg:py-24" id="My Achivements">
<div class="max-w-2xl mx-auto text-center" >
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Achivements</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Some memorable moment</p>
        </div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="womensday.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="dance.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="artcraft.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="internpe.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="python.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="ceo.jpg"
      alt=""
    />
  </div>


</div>
</section>















{/*.................................footer...........................*/}
<section class="bg-gradient-to-b from-green-50 to-green-100 sm:pt-16 lg:pt-24" id="Contact">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                <img class="w-auto h-9" src="odishi4.jpg" alt="" />

                <p class="text-base leading-relaxed text-gray-600 mt-7">🌟Thanks for stopping by today,
To view my work in your own way.
Each line of code, each crafted part,
Was made with care and lots of heart.

Your visit means the world to me,
Come back again — anytime, feel free! 💻🌟</p>

                <ul class="flex items-center space-x-3 mt-9">
                    <li>
                        <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg class="w-4 h-4" xmlns="tug of.jpg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                <path
                                    d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                ></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                ></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">for query</p>

                <ul class="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> linkedin</a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> github</a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Email </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> phone</a>
                    </li>
                </ul>
            </div>

            <div>
                <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Contact</p>

                <ul class="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> https://www.linkedin.com/in/subhankari-das-b2233a316 </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> https://github.com/subhankaridas </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> subhankaridas69@gmail.com </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> 720*****45 </a>
                    </li>
                </ul>
            </div>

            {/* <div class="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">S</p>

                <form action="#" method="POST" class="mt-6">
                    <div>
                        <label for="email" class="sr-only"> </label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                    </div>
{/* 
                    <button type="submit" class="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"></button> 
                </form>
            </div> */}
        </div>

        <hr class="mt-16 mb-10 border-gray-200" />

        <p class="text-sm text-center text-gray-600">🌸"I, Subhankari Das, daughter of Puspa Das and Saraswati Das, sincerely thank you for visiting my portfolio!" 🌸</p>
    </div>
</section>
    </>
  );
}

export default App;