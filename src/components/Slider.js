import React, { useState, useEffect } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import streamblue from '../images/streamblue.svg'
import streamwhite from '../images/streamwhite.svg'
import { BsPlayFill } from "react-icons/bs";


function Slider() {
    const [sliders, setSliders] = useState([])

    useEffect(() => {
    })

    const showSlider = async () => {
        var resultSlider = await fetch('https://api-beta.melobit.com/v1/song/slider/latest')
            .then(Response =>
                Response.json())
            .then(data => {
                setSliders(data.results)
            })
    }
    showSlider()
    




    return (
        <Container>
            <Row className="justify-content-lg-center flex">
                <Carousel className='col-md-12 p-0' indicators={false} controls={false}>
                    {
                        sliders.map((slide, i) => (
                            <Carousel.Item interval={1000} className=''>
                                <img
                                    key={i}
                                    className="d-block w-100 carousel-img"
                                    src={slide.image.slider.url}
                                    alt="slide"
                                />
                                <Carousel.Caption className=''>
                                    <button className='listen-now'>
                                        <div>Play</div>
                                        <div className=''>
                                        <BsPlayFill className='icon-size'/>
                                        </div>
                                    </button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </Row>
        </Container>
    );
}

export default Slider;