'use client';
import React from 'react'

import Header from "../components/albums/Banner";

import Music from '../components/albums/Music'
import Albums from '../components/albums/Albums'






export default function About() {

  return (
    <main>
        <div className=''>
        <Header title="OUR ALBUMS" url="/Images/albumsBanner.jpg"/>
        </div>
 
<Albums/>
<Music/>


    </main>
  );
}
