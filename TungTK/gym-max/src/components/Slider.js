import { Container, Row, Col } from 'react-bootstrap';
import SliderIMG from '../assets/backgroundColor.png'
import SliderModel from '../assets/Layer 3.png'
import '../style/Slider.css'
export default function Slider() {
    return (
        <div className="h-[950px] opacity-none slider-cont">
            <img className='object-cover h-full w-full' src={SliderIMG} />
            <Container className='relative bottom-[660px] right-[0px] slider-cont-content'>
                <Row className='overflow-hidden'>
                    <Col className='text-white' xs={5}>
                        <p className='text-[63px] font-extrabold slider-cont-content-title'>Dumbbells Shop</p>
                        <p className='text-[41px] font-extrabold mt-[-10px] slider-cont-content-title-2'>Best body fitness</p>
                        <p className='text-[15px] mt-[19px] slider-cont-content-title-3'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        </p>
                        <div className='mt-[62px] buttonStyleCont'>
                            <button className='buttonStyle'>
                                <span> SHOP NOW
                                </span>
                            </button>
                        </div>

                    </Col>
                </Row>
            </Container>


        </div>
    );
}