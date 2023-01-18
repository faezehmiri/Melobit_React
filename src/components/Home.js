import '../css/Player.css';
import React, { useState, useEffect } from 'react'
import Slider from "../components/Slider";
import TopTrendingArtist from "../components/TrendingArtist";
import Player from "../components/Player";
import Search from "../components/Search";
import DetailsSong from "../components/DetailesSongs";
import TopWeekSong from "../components/TopWeekSong";


export default function Home() {

    useEffect(() => {

    })

    return (

        <div className="">
            <Slider/>
            <TopTrendingArtist />


        </div>
    );
}


