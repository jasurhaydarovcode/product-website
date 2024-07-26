import { Button, Navbar } from 'flowbite-react'
import React from 'react'
import { FaCartPlus } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import { logo } from '../assets/images/images'

const Nav = () => {
    const location = useLocation();
    const isProductsPage = location.pathname === '/products';

    return (
        <div className='container mx-auto'>
            <Navbar fluid rounded className='bg-gray-900 text-white'>
                <Navbar.Brand href="/">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Products</span>
                </Navbar.Brand>


                <div className="flex md:order-2 gap-4">
                    {!isProductsPage && (
                        <Button>
                            <Link to="/products">Products</Link>
                        </Button>
                    )}
                    <Button>
                        <div>
                            <Link to="/cart" className='flex items-center gap-2'>
                                <FaCartPlus />
                                <span>Cart {0}</span>
                            </Link>
                        </div>
                    </Button>
                    {/* <Navbar.Toggle /> */}
                </div>
            </Navbar>
        </div>
    )
}

export default Nav