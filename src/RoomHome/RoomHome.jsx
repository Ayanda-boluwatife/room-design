import React from 'react'
import {nav, sliderData as slider, aboutData as about} from './roomData.js'
import Hero from './Hero/Hero'
import About from './About/About'
import Nav from './Nav/Nav'
import styled from 'styled-components'

const RoomHome = () => {
    return (
        <Wrapper>
            <div className='room-home' 
                data-aos="fade-in"
                data-aos-delay="150"
                data-aos-duration="1000">
                <Nav nav={nav}></Nav>
                <main className="room-home-container">
                <Hero slider={slider}></Hero>
                <About about={about}></About>
            </main>
        </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;600;700&display=swap');

.room-home {
  font-size: 12px;
  font-family: 'League Spartan', sans-serif;
  min-height: 100vh;
  background-color: hsl(0, 0%, 100%);
}

/* MAIN  */

.room-home-container {
  display: grid;
  height: 100vh;
  min-height: 570px;
  max-height: 100vh;
  /* border: 5px solid green; */
  grid-template-rows: 63% auto;
}

/* - Dark Gray: hsl(0, 0%, 63%)
- Black: hsl(0, 0%, 0%)
- White: hsl(0, 0%, 100%)
- Very Dark Gray: hsl(0, 0%, 27%)  */

@media only screen and (max-width: 1057px) {
  .room-home-container {
    display: flex;
    flex-direction: column;
    position: relative;
  }
}

`
export default RoomHome;
