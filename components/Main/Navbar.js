import Link from 'next/link'
import React from 'react'
import { RiHeartPulseFill,RiMentalHealthFill } from 'react-icons/ri'
import {GiNightSleep} from 'react-icons/gi'
import {CgGym,CgGames} from 'react-icons/cg'
import {MdDashboard,MdFoodBank,MdOutlineHelp,MdLogout } from 'react-icons/md'
import NavLink from './NavLink'

const Navbar = () => {
    return (
        <div className='bg-black flex-[.2] md:h-[100vh] flex items-center md:items-start md:flex-col gap-4 overflow-hidden'>
            <Link href="/">
                <div className='md:w-full md:mt-4 flex gap-2 text-2xl items-center text-white p-4'>
                    <RiHeartPulseFill className='text-2xl' />
                    <span>Healthverse</span>
                </div>
            </Link>
            <div className="flex md:flex-col ml-auto mr-5 text-white items-center md:items-stretch md:w-full md:gap-4 md:py-4 md:pl-4">
                <NavLink text = "Dashboard" address={"/"} icon = {<MdDashboard />} />
                <NavLink text = "Food" icon = {<MdFoodBank />} address ="/foodnutrition" />
                <NavLink text = "Sleep" icon = {<GiNightSleep />} address ="/sleep" />
                <NavLink text = "Exercise" icon = {<CgGym />} address ="/excercise" />
                <NavLink text = "Mental Heath" icon = {<RiMentalHealthFill />} address ="/mentalhealth" />
                <NavLink text = "Coginitive Games" address={"coginitivegames"} icon = {<CgGames />} />
                <hr className='bg-white ml-3 hidden md:block my-3' />
                <NavLink text = "Help" icon = {<MdOutlineHelp />} address ="/help" />
                {/* <NavLink type= "logout" text = "Logout" icon = {<MdLogout />}address = "#" /> */}
            </div>

            
        </div>
    )
}

export default Navbar