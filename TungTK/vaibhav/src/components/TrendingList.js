import React, { useRef, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../style/Swiper.css'
import FilmCont from './FilmCont';

export default function TrendingList() {

    return (
        <div className="w-full h-[456px] flex justify-center mt-[40px]">
            <div className="w-[1216px] h-[456px]">
                <div className="h-[30px] flex items-center justify-between">
                    <p className="text-[16px] font-normal text-[#02ff28]">Trending Movie's & TV Shows</p>
                    <button className="w-[100px] h-full text-white bg-gradient-to-r from-blue-800 to-blue-500 rounded-[25px]">Movies</button>
                </div>
                <div className='h-[426px] pt-[20px]'>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='h-[426px]'><FilmCont rating={8} /></SwiperSlide>
                        <SwiperSlide className='h-[426px]'><FilmCont rating={8} /></SwiperSlide>
                        <SwiperSlide className='h-[426px]'><FilmCont rating={8} /></SwiperSlide>
                        <SwiperSlide className='h-[426px]'><FilmCont rating={8} /></SwiperSlide>
                        <SwiperSlide className='h-[426px]'><FilmCont rating={8} /></SwiperSlide>
                        <SwiperSlide className='h-[426px]'><FilmCont rating={8} /></SwiperSlide>
                        <SwiperSlide className='h-[426px]'><FilmCont rating={8} /></SwiperSlide>
                        <SwiperSlide className='h-[426px]'><FilmCont rating={8} /></SwiperSlide>
                        <SwiperSlide className='h-[426px]'><FilmCont rating={8} /></SwiperSlide>
                        <SwiperSlide className='h-[426px]'><FilmCont rating={8} /></SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div>

    );
}