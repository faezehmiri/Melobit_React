import '../css/Player.css';
import React, { useState, useEffect } from 'react'

import SliderHead from "../components/SliderHead";
import NavbarHead from "../components/Navbar";
import TopTrendingArtist from "../components/TopTrendingArtist";
import TopWeekSong from "../components/TopWeekSong";
import TopDaySong from "../components/TopDaySong";
import LatestSong from "../components/LatestSong";
import Player from "../components/Player";
import Search from "../components/Search";
import DetailsSong from "../components/DetailsSong";


export default function Home() {

    useEffect(() => {

    })

    return (

        <div className="">
            <NavbarHead />
            <DetailsSong />
            {/* <SliderHead />
            <TopTrendingArtist />
            <LatestSong />
            <TopDaySong />
            <TopWeekSong /> */}
            {/* <Search /> */}
            {/* <Player /> */}

        </div>
    );
}