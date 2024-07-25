import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const FooterEnd = () => {
    return (
        <>
            <Footer container className='bg-gray-900'>
                <Footer.Copyright href="#" by="jasurhaydarovcode" year={2024} />
                <Footer.LinkGroup>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#"><Link to={"/products"}>Products</Link></Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Licensing</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </>
    )
}

export default FooterEnd