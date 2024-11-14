import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        { path: "/", title: "start a search" },
        { path: "/my-job", title: "My Jobs" },
        // { path: "/salary", title: "salary Estimates" },
        { path: "/post-job", title: "Post a Job" }
    ]
    // fixed bg-white/100 shadow-md

    return (
        <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <nav className='flex items-center justify-between py-6'>
                {/* <a href="">Job Portal</a> */}
                <Link to={"/"}>Job Portal</Link>

                {/* Nav items for large devices */}
                <ul className='hidden md:flex gap-12'>
                    {
                        navItems.map(({ path, title },index) => (
                            <li className='text-base' key={index}>
                                <NavLink
                                    to={path}
                                    className={({ isActive, isPending }) => isActive ? "active" : ""}
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

                {/* signup and login buttons */}
                <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                    <Link to={"/login"} className='py-2 px-5 border rounded'>Log in</Link>
                    <Link to={"/signup"} className='py-2 px-5 border rounded bg-blue text-white'>Sign in</Link>
                </div>

                {/* mobile menu */}

                <div className='md:hidden'>
                    <button onClick={handleMenuToggler}>
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5 text-primary' /> : <FaBarsStaggered className='w-5 h-5 text-primary' />
                        }

                    </button>
                </div>

            </nav>

            {/* navitems for mobile menu */}

            <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
                <ul>
                    {
                        navItems.map(({ path, title },index) => (
                            <li key={index} className='text-base text-white first:text-white'>
                                <NavLink
                                    to={path}
                                    className={({ isActive, isPending }) => isActive ? "active" : ""}
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                    <li className='text-white py-1'><Link>Log in</Link></li>
                </ul>
            </div>

        </header>
    )
}

export default Navbar
