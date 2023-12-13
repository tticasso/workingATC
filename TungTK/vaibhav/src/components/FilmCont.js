import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const FilmCont = ({rating}) => {
    return (
        <div>
            <img src='https://image.tmdb.org/t/p/original/sEaLO9s7CIN3fjz8R3Qksum44en.jpg' />
            <div className='w-[50px] h-[50px] relative bottom-[25px] bg-white rounded-full p-[2px]'>
                <CircularProgressbar
                    styles={buildStyles({
                        rotation: 0,
                        strokeLinecap: 'round',
                        textSize: '40px',
                        pathTransitionDuration: 0.5,
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })} value={rating} maxValue={10} text={`${rating}`} />
            </div>
            <div className='relative bottom-[25px] text-white'>
                <p className='text-[20px]'>Trolls Band Together</p>
                <p className='text-[14px] opacity-50'>Dec 13, 2023</p>
            </div>
        </div>
    );
}

export default FilmCont