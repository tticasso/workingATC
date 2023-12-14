import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import FilmCont from './FilmCont';

export default function ListWeek() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWQ0MmY0MDc3OGUzOTM2MjFjODBjYjgzOWM2ZmVjZiIsInN1YiI6IjY1NzI4YzA2NmY2YTk5MDBmZjllMDQzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ooY6CMs2ATQ4Dd-NFBjo1ZDlYg6ACXyAIlqBchZVTHE',
                },
            };

            try {
                const response = await fetch(
                    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=3',
                    options
                );
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []); // Empty dependency array ensures the effect runs only once after the component mounts

    return (
        <div className='h-[426px] pt-[20px]'>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                modules={[Pagination]}
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
            </Swiper>
        </div>
    );
}
