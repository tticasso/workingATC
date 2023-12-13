import { Col, Container, Row } from "react-bootstrap";
import { UilSearch, UilShoppingBag, UilUser } from '@iconscout/react-unicons';
import Logo from '../assets/Logo.png'
import '../style/Navbar.css'
import ResponsiveNavbar from "./ResponsiveNavbar";
import Menu from "./Menu";
export default function Navbar() {
    let Links = [
        { name: "Home", link: '/' },
        { name: "Pages", link: '/' },
        { name: "Classes", link: '/' },
        { name: "Portfolio", link: '/' },
        { name: "Blog", link: '/' },
        { name: "Contacts", link: '/' },
    ]
    return (
        <div className="shadow-md w-full h-[100px] navContainer">
            <div className="flex items-center h-full justify-around bg-[#000000] opacity-60 ">
                <div className="ml-[50px] navLogo">
                    <img src={Logo} />
                </div>
                <ul className="flex md:items-center navList">
                    {
                        Links.map((link) => (
                            <li key={link.name} className="md:ml-8 text-[16px] text-white menuList">
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex mr-[50px] navIcon">
                    <UilSearch size={20} className="text-white mr-[20px]" />
                    <UilShoppingBag size={20} className="text-white mr-[20px]" />
                    <UilUser size={20} className="text-white " />
                </div>
                <div className="menu hidden">
                    <Menu />
                </div>

            </div>
        </div>
    );
}

// {/* <div className=" w-full bg-[#000000] opacity-60">
//             <Container className="w-3/4 h-[100px] nav-cont">
//                 <Row className="flex items-center justify-around h-full w-full nav-row">
//                     <Col className="h-full flex items-center float-right relative left-[65px] logo-col" xs={2}>
//                         <img className="h-3/5" src={Logo} />
//                     </Col>
//                     <Col className="h-full flex justify-around text-[16px] items-center text-white list-menu" xs={6}>
//                         <p className="">Home</p>
//                         <p className="">Pages</p>
//                         <p className="">Classes</p>
//                         <p className="">Portfolio</p>
//                         <p className="">Blog</p>
//                         <p className="">Contacts</p>
//                     </Col>
//                     <Col className="hidden responsiveNav">
//                         {/* <ResponsiveNavbar /> */}
//                     </Col>
//                     <Col className="h-3/5 flex justify-around items-center relative right-[42px] list-menu-2" xs={2}>
//                         <UilSearch size={19} className="text-white relative left-[6px]" />
//                         <div className="w-[0.5px] h-1/3 bg-white mx-2 "></div>
//                         <UilShoppingBag size={19} className="text-white" />
//                         <div className="w-[0.5px] h-1/3 bg-white mx-2"></div>
//                         <UilUser size={19} className="text-white relative right-[8px]" />
//                     </Col>
//                 </Row>
//             </Container>
//         </div> */}