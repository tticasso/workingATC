import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { useState, useEffect } from 'react';

const FilmCont = ({ rating, title, src, date, movieId }) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer YOUR_API_KEY',
                },
            };

            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
                    options
                );
                const data = await response.json();
                // Khởi tạo genres với giá trị mặc định nếu không có dữ liệu
                setGenres(data.genres || []);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, [movieId]);
    return (
        <div>
            <div>
                <img src={src} />
                <div className='w-[145px] h-[40px] flex flex-wrap justify-end relative bottom-[40px] left-[75px]'>
                    <ul className='flex flex-wrap-reverse justify-end'>
                        {genres && genres.map((genre) => (
                            <li className='cursor-pointer hover:bg-black h-[15px] w-auto text-[12px] bg-[#4b4bf7] rounded-[5px] text-white p-[2px] m-[2px] flex justify-center items-center' key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='w-[50px] h-[50px] relative bottom-[65px] bg-white rounded-full p-[2px]'>
                <CircularProgressbar
                    styles={buildStyles({
                        rotation: 0,
                        strokeLinecap: 'round',
                        textSize: '40px',
                        pathTransitionDuration: 0.5,
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })} value={rating} maxValue={10} text={`${rating.toFixed(1)}`} />
            </div>
            <div className='relative bottom-[65px] text-white'>
                <span className='text-[20px] leading-[24px] overflow-hidden whitespace-nowrap max-w-full inline-block overflow-ellipsis'>{title}</span>
                <p className='text-[14px] opacity-50'>{date}</p>
            </div>
        </div>
    );
}

export default FilmCont