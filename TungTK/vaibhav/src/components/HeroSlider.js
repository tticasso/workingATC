
export default function HeroSlider() {
    return (
        <div className="h-[700px] w-full bg-[url('https://image.tmdb.org/t/p/original/w1ZeZ8XYTBCovnXi9bwi7D7glM4.jpg')] flex items-center justify-center ">
            <div>
                <p className="text-white text-[90px] font-bold text-center">Welcome...</p>
                <p className="text-center text-white text-[24px] font-bold">Your Favourites Movies, TV Shows and Discover...</p>
                <div className="w-full flex justify-center mt-[30px]">
                    <div className="w-[800px] h-[60px] flex">
                        <input type="text" placeholder="Search movies or TV shows..." className="text-[21px] w-4/5 rounded-l-[25px] h-full pl-[20px] outline-none" />
                        <button type="submit" className="w-1/5 h-full bg-gradient-to-r from-blue-800 to-blue-500 rounded-r-[25px]">
                            <p className="text-[18px] text-white font-bold">Search</p>
                        </button>
                        
                    </div>
                </div>

            </div>
        </div>
    );
}