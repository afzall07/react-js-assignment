import React from 'react'
import Slider from '../../components/slider/Slider'
import ParentCard from '../../components/cards/parentCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../footer/Footer'

function Home() {
    return (
        <>
            <Slider />
            <ParentCard />
            <Footer />
        </>
    )
}

export default Home