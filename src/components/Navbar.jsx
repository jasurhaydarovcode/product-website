import { Button, Navbar } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='container mx-auto'>
            <Navbar fluid rounded className='bg-gray-900 text-white'>
                <Navbar.Brand href="">
                    <img src="https://flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Product Website</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button>
                        <Link to={"/products"}>Products</Link>
                    </Button>
                    <Navbar.Toggle />
                </div>
                {/* <Navbar.Collapse>
                    <Navbar.Link href="#" active>Products</Navbar.Link>
                </Navbar.Collapse> */}
            </Navbar>
        </div>
    )
}

export default Nav