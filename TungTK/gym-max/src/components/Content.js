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
export default function Content() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const handleMenuItemClick = (index) => {
        setSelectedMenuItem(index);
    };


    const [isHovered, setIsHovered] = useState(false);
 

    

    return (
        <Container className="w-3/4">
            <Row>
                <Col className="h-[450px] flex bg-white" xs={12}>
                    <div className="h-full w-full flex border border-solid border-black shadow-md">
                        <div className="h-full w-1/3">
                            <div className="h-1/2 w-full">
                                <img className="h-full w-full object-fit" src={Model1} />
                            </div>
                            <div className="h-1/2 w-full flex justify-center items-center">
                                <div className="w-[90%]">
                                    <div className="flex justify-center w-full">
                                        <img src={Icon2} />
                                    </div>
                                    <p className="text-center text-[18px] font-bold mt-[10px] mb-[10px]">DUMBBELLS</p>
                                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-full w-1/3">
                            <div className="h-1/2 w-full flex justify-center items-center">
                                <div className="w-[90%]">
                                    <div className="flex justify-center w-full">
                                        <img src={Icon} />
                                    </div>
                                    <p className="text-center text-[18px] font-bold mt-[10px] mb-[10px]">STRENGTH</p>
                                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
                                    <div className="flex justify-center w-full">
                                        <img src={Icon1} />
                                    </div>
                                    <p className="text-center text-[18px] font-bold mt-[10px] mb-[10px]">STRENGTH</p>
                                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-[70px] relative">
                <Col className="flex" xs={12}>
                    <p
                        className={`text-[18px] font-bold mr-[20px] ml-[20px] mb-[10px] relative ${selectedMenuItem === 0 ? 'text-red-500' : ''
                            }`}
                        onClick={() => handleMenuItemClick(0)}
                    >
                        TOP SELLER
                        {selectedMenuItem === 0 && (
                            <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-red-500"></span>
                        )}
                    </p>
                    <p
                        className={`text-[18px] font-bold mr-[20px] ml-[20px] mb-[10px] relative ${selectedMenuItem === 1 ? 'text-red-500' : ''
                            }`}
                        onClick={() => handleMenuItemClick(1)}
                    >
                        FEATURED
                        {selectedMenuItem === 1 && (
                            <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-red-500"></span>
                        )}
                    </p>
                    <p
                        className={`text-[18px] font-bold mr-[20px] ml-[20px] mb-[10px] relative ${selectedMenuItem === 2 ? 'text-red-500' : ''
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

            <Row className="mt-[30px]">
                <Col className="h-[310px]" xs={3}>
                    <div
                        className={`w-full h-full flex justify-center relative transition duration-300 ease-in-out ${isHovered ? 'border-[1px] border-solid border-gray-300 shadow-md' : ''
                            }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="w-3/4">
                            <img className="mt-[25px] mb-[30px] ml-[15px]" src={Item1} alt="Product" />
                            <p className="text-[14px] font-semibold">Body Champ Cardio</p>
                            <p className="text-[14px] font-extrabold">$342.00</p>
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
                <Col className="h-[310px]" xs={3}>
                    <div
                        className={`w-full h-full flex justify-center relative transition duration-300 ease-in-out ${isHovered ? 'border-[1px] border-solid border-gray-300 shadow-md' : ''
                            }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="w-3/4">
                            <img className="mt-[25px] mb-[30px] ml-[15px]" src={Item2} alt="Product" />
                            <p className="text-[14px] font-semibold">Body Solid GCEC340</p>
                            <p className="text-[14px] font-extrabold">$214.00</p>
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
                <Col className="h-[310px]" xs={3}>
                    <div
                        className={`w-full h-full flex justify-center relative transition duration-300 ease-in-out ${isHovered ? 'border-[1px] border-solid border-gray-300 shadow-md' : ''
                            }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="w-3/4">
                            <img className="mt-[25px] mb-[30px] ml-[15px]" src={Item3} alt="Product" />
                            <p className="text-[14px] font-semibold">Bowflex BXE116 Elliptical </p>
                            <p className="text-[14px] font-extrabold">$421.00</p>
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
                <Col className="h-[310px]" xs={3}>
                    <div
                        className={`w-full h-full flex justify-center relative transition duration-300 ease-in-out ${isHovered ? 'border-[1px] border-solid border-gray-300 shadow-md' : ''
                            }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="w-3/4">
                            <img className="mt-[25px] mb-[30px] ml-[15px]" src={Item4} alt="Product" />
                            <p className="text-[14px] font-semibold">ETHOS GHD</p>
                            <p className="text-[14px] font-extrabold">$152.00</p>
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
            </Row>
            <Row className="mt-[30px]">
                <Col className="h-[310px]" xs={3}>
                    <div
                        className={`w-full h-full flex justify-center relative transition duration-300 ease-in-out ${isHovered ? 'border-[1px] border-solid border-gray-300 shadow-md' : ''
                            }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="w-3/4">
                            <img className="mt-[25px] mb-[30px] ml-[15px]" src={Item5} alt="Product" />
                            <p className="text-[14px] font-semibold">AFG Pro 7.2AI Incline</p>
                            <p className="text-[14px] font-extrabold">$252.00</p>
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
                <Col className="h-[310px]" xs={3}>
                    <div
                        className={`w-full h-full flex justify-center relative transition duration-300 ease-in-out ${isHovered ? 'border-[1px] border-solid border-gray-300 shadow-md' : ''
                            }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="w-3/4">
                            <img className="mt-[25px] mb-[30px] ml-[15px]" src={Item6} alt="Product" />
                            <p className="text-[14px] font-semibold">Weight Bench</p>
                            <p className="text-[14px] font-extrabold">$412.00</p>
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
                <Col className="h-[310px]" xs={3}>
                    <div
                        className={`w-full h-full flex justify-center relative transition duration-300 ease-in-out ${isHovered ? 'border-[1px] border-solid border-gray-300 shadow-md' : ''
                            }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="w-3/4">
                            <img className="mt-[25px] mb-[30px] ml-[15px]" src={Item7} alt="Product" />
                            <p className="text-[14px] font-semibold">ProForm Hiit Trainer Lite 5.9</p>
                            <p className="text-[14px] font-extrabold">$300.00</p>
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
                <Col className="h-[310px]" xs={3}>
                    <div
                        className={`w-full h-full flex justify-center relative transition duration-300 ease-in-out ${isHovered ? 'border-[1px] border-solid border-gray-300 shadow-md' : ''
                            }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="w-3/4">
                            <img className="mt-[25px] mb-[30px] ml-[15px]" src={Item8} alt="Product" />
                            <p className="text-[14px] font-semibold">Fitness Gear Pro</p>
                            <p className="text-[14px] font-extrabold">$124.00</p>
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
            </Row>

            <Row className="mt-[70px]">
                <Col xs={12}>
                    <p className="text-[36px] font-extrabold text-center">See What They Said About Us</p>
                </Col>
            </Row>

        </Container >
    );
}