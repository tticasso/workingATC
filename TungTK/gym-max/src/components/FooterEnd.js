import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../assets/Logo.png'
import '../style/Footer.css'
import { UilFacebookF, UilTwitter, UilGoogle, UilYoutube, UilLocationPoint, UilPhone, UilEnvelopeAlt, UilClock } from '@iconscout/react-unicons';

export default function FooterEnd() {
    return (
        <Container className='w-3/4'>
            <div className='w-full'>

                <div className='w-full flex justify-center mt-[100px] footer-logo'>
                    <img src={Logo} />
                </div>
                <div className='w-full flex justify-center mt-[30px]'>
                    <p className='text-center text-[14px] text-[#616161] w-3/4 footer-bla'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    </p>
                </div>

                <div className='w-full  flex  justify-center mt-[30px] '>
                    <div className=' w-1/4 text-[#616161] flex justify-around'>
                        <UilFacebookF />
                        <UilTwitter />
                        <UilGoogle />
                        <UilYoutube />
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-gray-500 mt-[40px] mb-[40px]"></div>
            <Row className='pb-[30px]'>
                <Col xs={3}>
                    <p className='text-[18px] text-white font-bold mb-[10px] footer-header'>CONTACT US</p>
                    <div className='flex text-[#616161] mb-[5px] '>
                         
                        <p className='text-[14px] footer-contents ml-[5px]'> 200 Lincoln Ave, Salinas, CA 93901</p>
                    </div>
                    <div className='flex text-[#616161] mb-[5px] '>
                         
                        <p className='text-[14px] footer-contents ml-[5px]'> 023 32423 223</p>
                    </div>
                    <div className='flex text-[#616161] mb-[5px] '>
                       
                        <p className='text-[14px] footer-contents ml-[5px]'> gymax@example.com</p>
                    </div>
                    <div className='flex text-[#616161] mb-[5px] '>
                        
                        <p className='text-[14px] footer-contents ml-[5px]'> 9:00 - 20:00 All day</p>
                    </div>
                </Col>
                <Col xs={3}>
                    <p className='text-[18px] text-white font-bold mb-[10px] footer-header'>MY ACCOUNT</p>
                    <div className='flex text-[#616161] mb-[5px] '>
                        <p className='text-[14px] footer-contents '> My account</p>
                    </div>
                    <div className='flex text-[#616161] mb-[5px] '>
                        <p className='text-[14px] footer-contents '> Check out</p>
                    </div>
                    <div className='flex text-[#616161] mb-[5px] '>
                        <p className='text-[14px] footer-contents '> Register</p>
                    </div>
                    <div className='flex text-[#616161] mb-[5px] '>
                        <p className='text-[14px] footer-contents '> Login</p>
                    </div>
                </Col>
                <Col xs={3}>
                    <p className='text-[18px] text-white font-bold mb-[10px] footer-header'>INFORMATION</p>
                    <div className='flex text-[#616161] mb-[5px] '>
                        <p className='text-[14px] footer-contents '> About us</p>
                    </div>
                    <div className='flex text-[#616161] mb-[5px] '>
                        <p className='text-[14px] footer-contents '> Contact us</p>
                    </div>
                    <div className='flex text-[#616161] mb-[5px] '>
                        <p className='text-[14px] footer-contents '> Terms of user</p>
                    </div>
                    <div className='flex text-[#616161] mb-[5px] '>
                        <p className='text-[14px] footer-contents '> Privacy Policy</p>
                    </div>
                </Col>
                <Col xs={3}>
                    <p className='text-[18px] text-white font-bold mb-[10px] footer-header'>QUICK LINK</p>
                    <div className='flex text-[#616161] mb-[5px] '>
                        <p className='text-[14px] footer-contents '> New user</p>
                    </div>
                    <div className='flex text-[#616161] mb-[5px] '>
                        <p className='text-[14px] footer-contents '> Help center</p>
                    </div>
                    <div className='flex text-[#616161] mb-[5px] '>
                        <p className='text-[14px] footer-contents '> Report spams</p>
                    </div>
                    <div className='flex text-[#616161] mb-[5px] '>
                        <p className='text-[14px] footer-contents '> FAQs</p>
                    </div>
                </Col>
            </Row>
        </Container>



    );
}