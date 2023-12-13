import { Col, Container, Row } from "react-bootstrap";
import Icon from '../assets/icon.png'
import Icon1 from '../assets/icon (1).png'
import Icon2 from '../assets/icon (2).png'
import Model1 from '../assets/model1.png'
import Model2 from '../assets/model2.png'
import Model3 from '../assets/model3.png'
import Item1 from '../assets/Item1.png'
import Item2 from '../assets/Item2.png'
import Item3 from '../assets/Item3.png'
import Item4 from '../assets/Item4.png'
import Item5 from '../assets/Item5.png'
import Item6 from '../assets/Item6.png'
import Item7 from '../assets/Item7.png'
import Item8 from '../assets/Item8.png'
import { useState } from "react";
import { UilShoppingBag, UilEye, UilHeart, UilExchange } from '@iconscout/react-unicons'
import '../style/Content.css'
export default function Content() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const handleMenuItemClick = (index) => {
        setSelectedMenuItem(index);
    };


    const [isHovered, setIsHovered] = useState(false);

    const Product = ({ image, name, price }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <Col className="h-[310px] w-[auto] items-cont" xs={12} md={6} lg={3}>
                <div
                    className={`w-full h-full flex justify-center relative transition duration-300 ease-in-out ${isHovered ? 'border-[1px] border-solid border-gray-300 shadow-md' : ''
                        }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="w-3/4">
                        <img className="w-[162px] h-[192px] mt-[25px] mb-[30px] ml-[15px]" src={image} alt="Product" />
                        <p className="text-[14px] font-semibold">{name}</p>
                        <p className="text-[14px] font-extrabold">{price}</p>
                    </div>
                    {isHovered && (
                        <div className="absolute top-0 right-0 mt-[20px] mr-[15px]">
                            <div className="flex items-center justify-center text-white w-[35px] h-[35px] bg-red-500 rounded-tl rounded-br border-[0.5px] border-solid border-grey">
                                <UilShoppingBag />
                            </div>
                            <div className="mt-[10px] flex items-center justify-center text-grey w-[35px] h-[35px] bg-white rounded-tl rounded-br border-[0.5px] border-solid border-grey">
                                <UilEye />
                            </div>
                            <div className="mt-[10px] flex items-center justify-center text-grey w-[35px] h-[35px] bg-white rounded-tl rounded-br border-[0.5px] border-solid border-grey">
                                <UilHeart />
                            </div>
                            <div className="mt-[10px] flex items-center justify-center text-grey w-[35px] h-[35px] bg-white rounded-tl rounded-br border-[0.5px] border-solid border-grey">
                                <UilExchange />
                            </div>
                        </div>
                    )}
                </div>
            </Col>
        );
    };




    return (
        <Container className="w-full flex justify-center">
            <div className="w-full relative left-[10px] md:w-[1195px]">
                <Row className="w-full flex  p-[0]">
                    <Col className="h-[500px] w-full flex justify-center content-header" xs={12}>
                        <div className="h-full w-full flex border border-solid border-gray-300 shadow-md">
                            <div className="h-full w-1/3">
                                <div className="h-1/2 w-full">
                                    <img className="h-full w-full object-fit" src={Model1} />
                                </div>
                                <div className="h-1/2 w-full flex justify-center items-center">
                                    <div className="w-[90%]">
                                        <div className="content-icon flex justify-center w-full">
                                            <img src={Icon2} />
                                        </div>
                                        <p className="text-center text-[18px] font-bold mt-[28px] mb-[10px] p1">DUMBBELLS</p>
                                        <p className="text-center p2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-full w-1/3">
                                <div className="h-1/2 w-full flex justify-center items-center bg-white">
                                    <div className="w-[90%]">
                                        <div className="content-icon flex justify-center w-full top-[-14px] relative">
                                            <img src={Icon} />
                                        </div>
                                        <p className="text-center text-[18px] font-bold mt-[10px] mb-[10px] p1 ">STRENGTH</p>
                                        <p className="text-center p2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <div className="h-1/2 w-full">
                                    <img className="h-full w-full object-fit" src={Model3} />
                                </div>
                            </div>

                            <div className="h-full w-1/3">

                                <div className="h-1/2 w-full">
                                    <img className="h-full w-full object-fit" src={Model2} />
                                </div>
                                <div className="h-1/2 w-full flex justify-center items-center">
                                    <div className="w-[90%]">
                                        <div className="content-icon flex justify-center w-full top-[-14px] relative">
                                            <img src={Icon1} />
                                        </div>
                                        <p className="text-center text-[18px] font-bold mt-[10px] mb-[10px] p1 uppercase">power rack & cages</p>
                                        <p className="text-center p2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-[70px] relative menuContainer">
                    <Col className="flex menuContainer" xs={12}>
                        <p
                            className={`content-items text-[18px] font-extrabold mr-[20px] ml-[20px] mb-[10px] relative ${selectedMenuItem === 0 ? 'text-red-500' : ''
                                }`}
                            onClick={() => handleMenuItemClick(0)}
                        >
                            TOP SELLER
                            {selectedMenuItem === 0 && (
                                <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-red-500"></span>
                            )}
                        </p>
                        <p
                            className={`content-items text-[18px] font-extrabold mr-[20px] ml-[20px] mb-[10px] relative ${selectedMenuItem === 1 ? 'text-red-500' : ''
                                }`}
                            onClick={() => handleMenuItemClick(1)}
                        >
                            FEATURED
                            {selectedMenuItem === 1 && (
                                <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-red-500"></span>
                            )}
                        </p>
                        <p
                            className={`content-items text-[18px] font-extrabold mr-[20px] ml-[20px] mb-[10px] relative ${selectedMenuItem === 2 ? 'text-red-500' : ''
                                }`}
                            onClick={() => handleMenuItemClick(2)}
                        >
                            MOST REVIEWS
                            {selectedMenuItem === 2 && (
                                <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-red-500"></span>
                            )}
                        </p>
                    </Col>
                </Row>

                <Row className="mt-[30px] mr-0 ml-0 w-full flex justify-center productList">
                    <Product image={Item1} name="Body Champ Cardio" price="$342.00" />
                    <Product image={Item2} name="Body Solid GCEC340" price="$214.00" />
                    <Product image={Item3} name="Bowflex BXE116 Elliptical" price="$421.00" />
                    <Product image={Item4} name="ETHOS GHD" price="$152.00" />
                </Row>
                <Row className="mt-[30px] mr-0 ml-0  w-full flex justify-center productList">
                    <Product image={Item5} name="AFG Pro 7.2AI Incline" price="$252.00" />
                    <Product image={Item6} name="Weight Bench" price="$412.00" />
                    <Product image={Item7} name="ProForm Hiit Trainer Lite 5.9" price="$300.00" />
                    <Product image={Item8} name="Fitness Gear Pro" price="$124.00" />
                </Row>

                <Row className="mt-[70px]">
                    <Col xs={12}>
                        <p className="text-[36px] font-extrabold text-center end">See What They Said About Us</p>
                    </Col>
                </Row>
            </div>


        </Container >
    );
}