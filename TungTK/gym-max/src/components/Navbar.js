import { Col, Container, Row } from "react-bootstrap";
import { UilSearch, UilShoppingBag, UilUser } from '@iconscout/react-unicons';
import Logo from '../assets/Logo.png'
export default function Navbar() {
    return (
        <div className=" bg-[#000000] opacity-60">
            <Container className=" w-3/4 h-[80px]">
                <Row className="flex items-center justify-around h-full">
                    <Col className="h-full flex items-center text-3xl text-white" xs={2}>
                        <img className="h-3/5" src={Logo} />
                    </Col>
                    <Col className="h-full flex items-center" xs={1}>

                    </Col>
                    <Col className="h-full flex justify-around text-[16px] items-center text-white" xs={6}>
                        <p>Home</p>
                        <p>Pages</p>
                        <p>Classes</p>
                        <p>Portfolio</p>
                        <p>Blog</p>
                        <p>Contacts</p>
                    </Col>
                    <Col className="h-full flex items-center" xs={1}>

                    </Col>
                    <Col className="h-full flex justify-around items-center" xs={2}>
                        <UilSearch className="text-white" />
                        <div className="w-[0.5px] h-1/2 bg-white mx-2"></div>
                        <UilShoppingBag className="text-white" />
                        <div className="w-[0.5px] h-1/2 bg-white mx-2"></div>
                        <UilUser className="text-white" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}