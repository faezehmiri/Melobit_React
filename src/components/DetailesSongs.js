import React, { useState, useEffect } from 'react';
import '../css/Player.css';
import { Container, Row } from 'react-bootstrap';
import { BsCalendar, BsDownload, BsPlay } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
// import Rectangle from '../images/Rectangle 7.png'


function DetailsSong() {
    const [songs, setSongs] = useState([])

    // useEffect(() => {
    //     const showSlider = async () => {
    //         var resultSlider = await fetch('https://api-beta.melobit.com/v1/song/NThRYnA')
    //             .then(response => {
    //                 setSong(console.log(response.data))
    //             })
    //     }
    //     setSong()
    // }, [])





    return (
        <Container>
            {/* بنر تصویر بالا */}
            <Row className="justify-content-lg-center flex">

            </Row>

            <div>
                {/* قسمت سمت راست پلیر موزیک و رنک موزیک */}
                <div className='music-player-card'>
                    <img
                        // key={i}
                        className="d-block w-100 detailes-banner"
                        src=""
                        alt="slide"
                    />
                </div>
                <div className='seekbar-box'>
                    <div className='song-name'>
                        songname
                    </div>
                    <div className='artist-name'>
                        aron
                    </div>
                    <div className='center'>
                        <audio controls >
                            <source src="horse.ogg" type="audio/ogg" />
                            <source src="horse.mp3" type="audio/mpeg" />
                        </audio>
                    </div>
                </div>
                <div className='music-rank-col'>
                    <div className='text-light'>
                        <BsCalendar /><span className='text-rank'>123</span>
                    </div>

                    <div className='music-rank-row'>
                        <div className='text-light'>
                            <BsPlay /><span className='text-rank'>123</span>
                        </div>
                        <div className='text-light'>
                            <BsDownload /><span className='text-rank'>123</span>
                        </div>
                        <div className='text-light'>
                            <MdFavoriteBorder /><span className='text-rank'>123</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='music-rank-row'>
                <div className='row-between'>
                    <div className='column button-container'>
                        {/* دکمه های دانلود */}

                        <button className='download-btn'>
                            <BsDownload /><span className='text-rank'>Download</span>
                        </button>
                        <button id='high' className='download-quality-btn '>
                            <span className='text-rank'>with 320 quality</span>
                        </button>
                        <button id='low' className='download-quality-btn'>
                            <span className='text-rank'>with 128 quality</span>
                        </button>
                    </div>
                    {/* جزئیات اهنگ */}
                    <div className='song-details'>
                        <div className='text-light'>
                            <BsDownload /><span className='text-rank'>123</span>
                        </div>
                        <div className='text-light'>
                            <BsDownload /><span className='text-rank'>123</span>
                        </div>
                        <div className='text-light'>
                            <BsDownload /><span className='text-rank'>123</span>
                        </div>
                        <div className='text-light'>
                            <BsDownload /><span className='text-rank'>123</span>
                        </div>
                        <div className='text-light'>
                            <BsDownload /><span className='text-rank'>123</span>
                        </div>
                    </div>

                </div>


                {/* متن اهنگ */}
                <div className='lyrics'>
                </div>
            </div>
        </Container>
    );
}

export default DetailsSong;