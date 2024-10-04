import React from 'react'

const Posters = () => {
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col-md-3 col-sm-6 ">
                    <div className="p-3 border bg-light text-center poster-box poster-box-1" data-aos="fade-right"></div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="p-3 border bg-light text-center poster-box poster-box-2" data-aos="flip-left" ></div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="p-3 border bg-light text-center poster-box poster-box-3" data-aos="flip-right"></div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="p-3 border bg-light text-center poster-box poster-box-4" data-aos="fade-left"></div>
                </div>
            </div>
        </div>
    )
}

export default Posters
