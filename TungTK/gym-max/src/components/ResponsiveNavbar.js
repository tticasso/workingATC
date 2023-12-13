import { useState } from "react";
import Logo from '../assets/Logo.png'

function ResponsiveNavbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="app">
            <nav>
                <div className="bg-[#000000] opacity-60 h-[100px]">
                    <div className="max-w-7xl mx-auto bg-[#000000] opacity-60 h-[100px]">
                        <div className="flex mx-auto justify-between w-5/6 ">
                            {/* Primary menu and logo */}
                            <div className="flex items-center gap-16 my-12">
                                {/* logo */}
                                <div>
                                    <a
                                        href="/"
                                        className="flex gap-1 font-bold text-gray-700 items-center "
                                    >
                                        <img src={Logo} />
                                    </a>
                                </div>
                                {/* primary */}
                                <div className="hidden lg:flex gap-8 text-white">
                                    <a href="#" className="">
                                        Home
                                    </a>
                                    <a href="#">Pages</a>
                                    <a href="#">Classes</a>
                                    <a href="#">Portfilio</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Contact</a>
                                </div>
                            </div>
                            {/* secondary */}
                            <div className="flex gap-6">
                                {/* Mobile navigation toggle */}
                                <div className="lg:hidden flex items-center">
                                    <button onClick={() => setToggleMenu(!toggleMenu)}>
                                        {/* <Bars3Icon className="h-6" /> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile navigation */}
                <div
                    className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
                        }`}
                >
                    <div className="px-8">
                        <div className="flex flex-col gap-8 font-bold tracking-wider">
                            <a href="#" className="border-l-4 border-gray-600">
                                Features
                            </a>
                            <a href="#">Pricing</a>
                            <a href="#">Download</a>
                            <a href="#">Classic</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default ResponsiveNavbar;
