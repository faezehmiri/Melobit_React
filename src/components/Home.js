import '../css/Player.css';
import React, { useState, useEffect } from 'react'

import Slider from "../components/Slider";
import NavbarHead from "../components/NavigationBar";
import TopTrendingArtist from "../components/TrendingArtist";
import TopWeekSong from "../components/TopWeekSong";
import TopDaySong from "../components/TopDaySong";
import LatestSong from "../components/LatestSong";
import Player from "../components/Player";
import Search from "../components/Search";
import DetailsSong from "../components/DetailesSongs";


export default function Home() {

    useEffect(() => {

    })

    return (

        <div className="">
            <SliderHead />
            <TopTrendingArtist />
            <LatestSong />
            <TopDaySong />
            <TopWeekSong /> 
            <Footer />

        </div>
    );
}


