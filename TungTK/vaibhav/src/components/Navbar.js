import { UilPlayCircle, UilSearch, UilTimes } from '@iconscout/react-unicons';
import React, { useState } from 'react';

export default function Navbar() {
    let Links = [
        { name: "Movies", link: '/' },
        { name: "TV Show", link: '/' },
        { name: "Login", link: '/' },
    ];

    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    return (
        <div className='bg-[#000] bg-opacity-50 flex justify-around items-center '>
            <div className=''>
                <UilPlayCircle size={50} className="text-[#8cc53f]" />
            </div>
            <div className='flex'>
                <ul className='flex'>
                    {Links.map((link) => (
                        <li key={link.name} className="font-medium text-[16px] ml-[30px] text-white font-['Avenir']">
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                </ul>

                <div>
                    <div id="searchIcon" onClick={toggleSearch}>
                        <UilSearch size={25} className="text-[#fff] ml-[30px]" />
                    </div>

                    {isSearchVisible && (
                        <div className='flex absolute top-[50px] right-[290px] m-auto w-[300px] h-[40px] rounded-[20px]'>
                            <input type="text" placeholder="Search..." className="text-[18px] pl-[20px] w-4/5 h-full p-2 rounded-l-[20px] border border-white outline-none" />
                            <button onClick={toggleSearch} className='bg-white w-1/5 rounded-r-[20px] flex justify-center items-center border-l-[1px] border-black'><UilTimes/></button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
