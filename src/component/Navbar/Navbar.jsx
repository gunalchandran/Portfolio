import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const NavbarData = [
    {
        id: 1,
        name: "Home",
        link: '/',
    }, {
        id: 1,
        name: "About",
        link: '/About',

    },
    {
        id: 2,
        name: "Skills",
        link: "/Skills",
    },
    {
        id: 3,
        name: "Projects",
        link: "/Projects",
    },
    {
        id: 3,
        name: "Contact",
        link: "/Contact",
    },

]
const Navbar = () => {
    return (
        <div>
            <div className=''>
                <div className=' '>
                    <div className='flex justify-center w-full h-12 pt-2 p-2 '>
                        {/* <div className='font-bold text-3xl'>
                            <h1>CSG</h1>
                        </div> */}
                        <div>
                            <ul className='flex space-x-9'>
                                {
                                    NavbarData.map((data) => (
                                        <li key={data.id}>
                                            <Link to={data.link}>
                                                {data.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar