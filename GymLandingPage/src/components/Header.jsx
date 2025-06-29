import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <div className='bg-white border border-gray-300 rounded-lg mx-5 h-12'>
            <div className='flex justify-between items-center mt-3 mx-5'>
                <h1>GYMKIT</h1>
                <div className='flex gap-3'>
                    <ul className="">
                        <li>About Us</li>
                        <li>Problem</li>
                        <li>Testemonials</li>
                        <li>Features</li>
                    </ul>

                    <button className='bg-gray-200' onClick={()=> setClicked(true)}>
                        Contact Us
                    </button>
                    <Menu />
                </div>
            </div>
        </div>
    );
}

export default Header;
