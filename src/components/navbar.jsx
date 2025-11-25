import React from 'react'
import {navLinks} from "../constants/index.js";


export const Navbar = () => {
    return (
        <nav>
            <div>
                <img src={"/images/logo.svg"} alt="logo"/>
                <p className={"font-bold"}>Tsvetan's Portfolio</p>
                <ul>
                    {navLinks.map(({id, name}) => (
                        <li key={id}>
                            <p>
                                {name}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
