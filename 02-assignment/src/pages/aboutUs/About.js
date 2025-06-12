import React from 'react'
import Footer from '../footer/Footer'

function About() {
    return (
        <>
            <div className='container d-flex flex-column align-items-center justify-content-center vh-100'>
                <h1 className='text-center'>About Us </h1>
                <p className='text-center'>
                    We are a company dedicated to providing the best services to our customers. Our team is committed to excellence and innovation.
                </p>
                <p className='text-center'>
                    Our mission is to deliver high-quality products and services that exceed our customers' expectations.
                </p>
            </div>
            <Footer />
        </>

    )
}

export default About