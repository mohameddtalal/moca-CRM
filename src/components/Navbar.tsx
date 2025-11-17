"use client"

import Link from "next/link"
import Image from "next/image"


const Navbar = () => {
    return (
        <nav className="navbar rounded-full">
            <div className="row">
                <Link href="/">
                    <div className="logo">
                        <Image
                            src="/assets/Asset1.svg"
                            alt="logo"
                            className="logo-img"
                            width={46} height={44}
                        />
                    </div>
                </Link>
                <div className="navItems">
                    <div className="search">
                        <Image 
                            className="search-img"
                            src="/assets/search.svg"
                            alt="search"
                            width={22}
                            height={22}
                        />
                    </div>
                    <div className="line"></div>
                    <div className="notifications"> 
                        <Link href="/"> 
                            <button className="notification"> 
                                <Image 
                                className="notification-img" 
                                src="/assets/notification.svg" 
                                alt="notification" 
                                width={24} 
                                height={24} 
                                /> 
    
                            </button> 
                        </Link> 
                    </div>
                    <div className="line"></div>
                    <div className="quote">
                        <Image
                            src="/assets/Path13255.svg"
                            alt="quote"
                            width={12}
                            height={12}
                            className="quote-img"
                        />
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar

