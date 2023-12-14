import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; // Import fade effect styles
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import '../style/Swiper.css';
import FilmCont from './FilmCont';
import SwiperCore from 'swiper/core';

SwiperCore.use([Pagination, Navigation, EffectFade]);

export default function ListFilm() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer YOUR_API_KEY', // Replace with your API key
                },
            };

            try {
                const response = await fetch(
                    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
                    options
                );
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full h-[456px] flex justify-center mt-[0px]">
            <div className="w-[1216px] h-[456px]">
                <div className="h-[30px] flex items-center justify-between">
                    <p className="text-[16px] font-normal text-[#02ff28]">Upcoming Movies</p>
                    <button className="w-[100px] h-full text-white bg-gradient-to-r from-blue-800 to-blue-500 rounded-[25px]">Movies</button>
                </div>
                <div className='h-[426px] pt-[20px]'>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        // navigation={{  // Add navigation prop
                        //     nextEl: '.swiper-button-next',
                        //     prevEl: '.swiper-button-prev',
                        // }}
                        
                        modules={[Pagination, Navigation, EffectFade]}
                        className="mySwiper"
                    >
                        {movies.map((movie) => (
                            <SwiperSlide key={movie.id} className='h-[426px]'>
                                <FilmCont
                                    rating={movie.vote_average}
                                    title={movie.title}
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    date={movie.release_date}
                                    movieId={movie.id}
                                />
                            </SwiperSlide>
                        ))}
                        {/* <div className="swiper-button-next"></div> 
                        <div className="swiper-button-prev"></div>  */}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
