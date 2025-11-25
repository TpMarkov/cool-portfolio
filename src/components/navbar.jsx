import React from 'react'
import {navIcons, navLinks} from "../constants/index.js";
import dayjs from "dayjs";
import {useState, useEffect} from "react";


export const Navbar = () => {
    const [time, setTime] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs());
        }, 1000); // update every second

        return () => clearInterval(interval); // cleanup
    }, []);

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
            <div>
                <ul>
                    {navIcons.map(({id, img}) => (
                        <li key={id}>
                            <img src={img} alt="nav-logo" className={"icon-hover"}/>
                        </li>
                    ))}
                </ul>
            </div>
            <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </nav>
    )
}
