"use client"
import { useRouter } from "next/navigation";
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useNav } from "@/components/Context/Navcontext";

const Navbar = () => {
const [isSearchOpen, setIsSearchOpen] = useState(false)
const [searchText, setSearchText] = useState("")
 const { selectedTitle, selectedButton } = useNav();
 const router = useRouter();
  const handleSearch = () => {
setIsSearchOpen(prev => !prev)   // toggle input
  }
    return (
        <nav className="navbar rounded-full">
            <div className="row">
                <Link href="/dashboard">
                    <div className="logo">
                        <Image
                            src="/assets/Asset1.svg"
                            alt="logo"
                            className="logo-img"
                            width={46} height={44}
                        />
                    </div>
                </Link>
                <div className="" style={{display:'flex' , flexDirection:'column' , justifyContent:'center' ,alignItems:'center', padding:'16px 0px', gap:'3px',width:"100%" }}>
                 <div className="card-title-sm" style={{marginBottom:'0px' , color:'var(--black)'}}>
                    <p>{selectedTitle}</p>
                 </div>
                  <div className="" style={{marginTop:'0px',color:'var(--black)',fontSize:'16px'}}  >
                    <p>{selectedButton}</p>
                 </div>


                </div>
                <div className="navItems" style={{ position: "relative" }}>
                    {isSearchOpen && (
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            autoFocus
                            style={{
                            position:"absolute",
                            right: "87px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            padding: "6px 20px",
                            borderRadius: "48px",
                            border: "1px solid var(--hot-purple)",
                            outline:"none",
                            fontSize: "14px",
                            width:"217px",
                            height:"36px",
                            }}
                        />
                        )}
                    <div className="search" >
                        <button className="search"  style={{ zIndex: 10 ,cursor:'pointer'}}
                        onClick={handleSearch}> 
                        <Image 
                            className="search-img"
                            src="/assets/search.svg"
                            alt="search"
                            width={22}
                            height={22}
                        />
                        </button>
                         {/* Search input (show only if open) */}
         
                    </div>
                    <div className="line"></div>
                    <div className="notifications"> 
                        <button className="notification" style={{cursor:'pointer'}}
                         onClick={() => router.push("/notificationPage")} > 
                                
                                <Image 
                                className="notification-img" 
                                src="/assets/notification.svg" 
                                alt="notification" 
                                width={24} 
                                height={24} 
                                /> 
                          </button> 
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

