import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Brand1 from '../assets/Brand 1.png'
import Brand2 from '../assets/Brand 2.png'
import Brand3 from '../assets/Brand 3.png'
import Brand4 from '../assets/Brand 4.png'
import Brand5 from '../assets/Brand 5.png'
import Brand6 from '../assets/Brand 6.png'
import Lina from '../assets/lina.png'
export default function Brands() {
    const [selectedDot, setSelectedDot] = useState(null);
    const handleDotClick = (dotIndex) => {
        setSelectedDot(dotIndex);
    };
    return (
        <Container className="w-3/4">
            <Row>
                <Col className="w-full flex justify-center mt-[35px]">
                    <div className="w-3/5">
                        <div className="w-full flex justify-center">
                            <div className="w-[80px] h-[80px]">
                                <img className="object-cover w-full h-full rounded-full" src={Lina} />
                            </div>
                        </div>

                        <p className="text-[18px] text-[#616161] text-center mt-[20px] mb-[20px]">
                            “Good services. I bought a bicycle with a wrong but they accepted free return for me and exchange a new product for me.
                        </p>
                        <p className="text-[18px] text-center font-bold">
                            LINA
                        </p>
                        <p className="text-[18px] text-[#616161] text-center mt-[5px]">
                            Happy clients
                        </p>
                        <div className=" w-full flex items-center justify-center mt-[20px] mb-[70px]">
                            {[0, 1, 2].map((dotIndex) => (
                                <div
                                    key={dotIndex}
                                    className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${selectedDot === dotIndex ? 'bg-red-500' : 'bg-gray-300'
                                        }`}
                                    onClick={() => handleDotClick(dotIndex)}
                                ></div>
                            ))}
                        </div>

                    </div>

                </Col>
            </Row>
            <div className="w-full h-[1px] bg-gray-500 mt-4"></div>
            <Row className="h-85px mt-[30px] mb-[30px]">
                <Col className="h-full" xs={2}>
                    <img className="h-full" src={Brand1} />
                </Col>
                <Col className="h-full" xs={2}>
                    <img className="h-full" src={Brand2} />
                </Col>
                <Col className="h-full" xs={2}>
                    <img className="h-full" src={Brand3} />
                </Col>
                <Col className="h-full" xs={2}>
                    <img className="h-full" src={Brand4} />
                </Col>
                <Col className="h-full" xs={2}>
                    <img className="h-full" src={Brand5} />
                </Col>
                <Col className="h-full" xs={2}>
                    <img className="h-full" src={Brand6} />
                </Col>
            </Row>
        </Container>
        
    );
}