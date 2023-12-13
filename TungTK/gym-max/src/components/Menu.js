import React, { useState } from 'react';
import { UilBars } from '@iconscout/react-unicons';
const Menu = () => {
    const [isMenuVisible, setMenuVisibility] = useState(false);

    const toggleMenu = () => {
        setMenuVisibility(!isMenuVisible);
    };

    let Links = [
        { name: "Home", link: '/' },
        { name: "Pages", link: '/' },
        { name: "Classes", link: '/' },
        { name: "Portfolio", link: '/' },
        { name: "Blog", link: '/' },
        { name: "Contacts", link: '/' },
    ]

    return (
        <div>
            <div
                id="menu-icon"
                onClick={toggleMenu}
                style={{
                    cursor: 'pointer',
                    fontSize: '24px',
                    backgroundColor: '#0000',
                    color: '#fff',
                }}
            >
                <UilBars />
            </div>

            {isMenuVisible && (
                <div
                    id="menu"
                    style={{
                        display: 'block',
                        position: 'absolute',
                        top: '30px',
                        right: '0px',
                        backgroundColor: 'black',
                        color: 'white',
                        width: '80px',
                        textAlign: 'center'
                    }}
                >
                    {/* Menu content goes here */}
                    <ul>
                        {
                            Links.map((link) => (
                                <li key={link.name} className="text-[10px] text-white menuList">
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Menu;
