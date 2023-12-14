import React, { useEffect, useState } from 'react';

export default function HeroSlider() {
    const [backgroundImages, setBackgroundImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showRecommendations, setShowRecommendations] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer YOUR_API_KEY', // Thay YOUR_API_KEY bằng API key của bạn
                    },
                };

                const response = await fetch('https://api.themoviedb.org/3/movie/8836/images', options);
                const data = await response.json();

                if (data.backdrops && data.backdrops.length > 0) {
                    const imageUrls = data.backdrops.map(backdrop => `https://image.tmdb.org/t/p/original${backdrop.file_path}`);
                    setBackgroundImages(imageUrls);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
        }, 8000);

        return () => clearInterval(intervalId);
    }, [backgroundImages]);

    const handleSearchChange = async (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query.trim() === '') {
            setShowRecommendations(false);
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
                const top5Results = data.results.slice(0, 5); // Lấy 5 kết quả đầu tiên
                setSearchResults(top5Results);
                setShowRecommendations(true);
            } else {
                setShowRecommendations(false);
            }
        } catch (error) {
            console.error(error);
            setShowRecommendations(false);
        }
    };

    const handleRecommendationClick = (movie) => {
        // Xử lý khi người dùng chọn một gợi ý, ví dụ: điều hướng đến trang chi tiết phim
        console.log('Selected movie:', movie);
    };

    const imageStyle = {
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        transition: 'background-image 1s ease-in-out',
        position: 'relative',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'rgba(0, 0, 0, 0.5)',
    };

    const searchContainerStyle = {
        position: 'relative',
        zIndex: 1,
    };

    const recommendationsStyle = {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        background: 'white',
        borderRadius: "20px",
        marginTop: "5px",
        opacity: "80%",
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: showRecommendations ? 'block' : 'none',
    };

    return (
        <div className="h-[700px] w-full bg-cover bg-center flex items-center justify-center relative" style={imageStyle}>
            <div style={overlayStyle}></div>
            <div style={searchContainerStyle}>
                <p className="text-white text-[90px] font-bold text-center">Welcome...</p>
                <p className="text-center text-white text-[24px] font-bold">Your Favourites Movies, TV Shows and Discover...</p>
                <div className="w-full flex justify-center mt-[30px] relative">
                    <div className="w-[800px] h-[60px] relative">
                        <div className='w-full h-full flex'>
                            <input
                                type="text"
                                placeholder="Search movies or TV shows..."
                                className="text-[21px] w-4/5 rounded-l-[25px] h-full pl-[20px] outline-none"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button
                                type="submit"
                                className="w-1/5 h-full bg-gradient-to-r from-blue-800 to-blue-500 rounded-l-[0px] rounded-r-[25px]"
                            >
                                <p className="text-[18px] text-white font-bold">Search</p>
                            </button>
                        </div>

                        <div style={recommendationsStyle}>
                            <ul className="rounded-[20px]">
                                {searchResults.map(movie => (
                                    <li
                                        key={movie.id}
                                        className="cursor-pointer hover:bg-gray-200 p-2"
                                        onClick={() => handleRecommendationClick(movie)}
                                    >
                                        {movie.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
