import React, { useState, useEffect } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import streamblue from '../images/streamblue.svg'
import streamwhite from '../images/streamwhite.svg'
import play from '../images/play.svg'


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
    // console.log(sliders)




    return (
        <Container>
            <Row className="justify-content-lg-center flex">
                <Col className='col-2 p-0 '>
                    <img src={streamblue} className='mr-0 stream-blue stream-mt' />
                </Col>
                <Carousel className='col-md-8 p-0' indicators={false} controls={false}>
                    {
                        sliders.map((slide, i) => (
                            <Carousel.Item interval={3000} className=''>
                                <img
                                    key={i}
                                    className="d-block w-100 carousel-img"
                                    src={slide.image.slider.url}
                                    alt="slide"
                                />
                                <Carousel.Caption className=''>
                                    <button className='listen-now'>
                                        <div>Listen now</div>
                                        <div className='circle-play'>
                                            <img src={play} className='p-1'></img>
                                        </div>
                                    </button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
                <Col className='col-2 p-0'>
                    <img src={streamwhite} className='stream-mt'></img>
                </Col>
            </Row>
        </Container>
    );
}

export default Slider;