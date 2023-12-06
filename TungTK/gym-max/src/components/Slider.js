import { Container, Row, Col } from 'react-bootstrap';
import SliderIMG from '../assets/468886-PFZ4PE-862 (1).png'
import SliderModel from '../assets/Layer 3.png'
import '../style/Slider.css'
export default function Slider() {
    return (
        <div className="h-[800px] opacity-none">
            <img className='relative object-cover h-full w-full' src={SliderIMG} />
            <Container className='absolute bottom-[250px] right-0'>
                <Row>
                    <Col className='text-black' xs={5}>
                        <p className='text-[60px] font-extrabold'>Dumbbells Shop</p>
                        <p className='text-[40px] font-extrabold'>Best body fitness</p>
                        <p className='text-[14px]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        </p>
                        <div className='mt-[30px]'>
                            <button className='buttonStyle'>
                                <span> SHOP NOW
                                </span>
                            </button>
                        </div>

                    </Col>
                </Row>
            </Container>
            <Container className=' flex float-right w-3/4 absolute bottom-0 left-60'>
                <Col xs={8}>
                </Col>
                <Col className='' xs={4}>
                    <img className='' src={SliderModel} />
                </Col>
            </Container>


        </div>
    );
}