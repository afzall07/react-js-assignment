import React from 'react'

import './slider.css'

function Slider() {
    return (
        <>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://thumbs.dreamstime.com/b/devops-data-analysis-development-digital-information-technology-businessman-sitting-desk-typing-computer-laptop-359483192.jpg" class="d-block w-100 img-height" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.pexels.com/photos/16230157/pexels-photo-16230157/free-photo-of-monitor-and-laptops-on-gaming-desk.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100 img-height" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100 img-height" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider