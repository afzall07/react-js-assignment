import React from 'react'

function Slider() {
    return (
        <>
            <div id="carouselExample" class="carousel slide m-5">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg?t=st=1746110507~exp=1746114107~hmac=52a7facd5b2940d35a3d515015f8ddba47f4782be4f1f6945fd3300c85611412&w=1380" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15788.jpg?t=st=1746110556~exp=1746114156~hmac=3afa8c7bb6255bca76357134734698e21d875b5311ad47fb9c5679a78dd66867&w=1380" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?ga=GA1.1.1791740621.1699888076&semt=ais_hybrid&w=740" class="d-block w-100" alt="..." />
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