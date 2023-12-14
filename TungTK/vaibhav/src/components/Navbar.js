import { UilPlayCircle, UilSearch, UilTimes } from '@iconscout/react-unicons';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
    let Links = [
        { name: "Movies", link: '/' },
        { name: "TV Show", link: '/' },
        { name: "Login", link: '/' },
    ];

    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const handleSearchChange = async (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query.trim() === '') {
            setSearchResults([]);
            return;
        }

        try {
            const searchOptions = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWQ0MmY0MDc3OGUzOTM2MjFjODBjYjgzOWM2ZmVjZiIsInN1YiI6IjY1NzI4YzA2NmY2YTk5MDBmZjllMDQzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ooY6CMs2ATQ4Dd-NFBjo1ZDlYg6ACXyAIlqBchZVTHE', // Thay YOUR_API_KEY bằng API key của bạn
                },
            };

            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`, searchOptions);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                setSearchResults(data.results.slice(0, 5)); // Lấy 5 kết quả đầu tiên
            } else {
                setSearchResults([]);
            }
        } catch (error) {
            console.error(error);
            setSearchResults([]);
        }
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
                        <div className='absolute top-[50px] right-[290px] m-auto w-[300px] p-[10px] rounded-[20px] bg-[#333]'>
                            <div className='flex '>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="text-[18px] pl-[20px] w-4/5 h-full p-2 rounded-l-[20px] border-none outline-none bg-[#333] text-white"
                                    onChange={handleSearchChange}
                                    value={searchQuery}
                                />
                                <button onClick={toggleSearch} className='bg-[#333] w-1/5 rounded-l-[0px] text-white rounded-r-[20px] flex justify-center items-center border-l-[1px] border-white'>
                                    <UilTimes />
                                </button>
                            </div>

                            {searchResults.length > 0 && (
                                <div className="mt-2">
                                    <ul className="list-none p-0">
                                        {searchResults.map((result) => (
                                            <li key={result.id} className="text-white text-[16px] mt-1">
                                                {result.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
