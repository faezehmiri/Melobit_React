import '../css/Player.css';
import React from 'react'
import SliderHead from "../components/Slider";
import TopTrendingArtist from "../components/TrendingArtist";
import TopWeekSong from "../components/TopWeekSong";
import TopDaySong from "../components/TopDaySong"


export default function Home() {

    return (
        <div className="">
            <SliderHead />
            <TopDaySong />
            <TopTrendingArtist />
            <TopWeekSong /> 
            
            
            
        </div>
    );
}

