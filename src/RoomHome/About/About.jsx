import React from 'react'
import styled from 'styled-components'

const About = ({about}) => {
    return (
        <Wrapper>
            <section className="room-home-about">
                <img src={about.imgDark} alt="" className="room-home-about-left-img"/>
                <div className="room-home-about-text-content">
                        <h5>{about.title}</h5>
                        <p>{about.text}</p>
                </div>
                <img  src={about.imgLight} alt=""
                className="room-home-about-right-img"/>
            </section>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    .room-home-about {
  /* border: 5px solid blue; */
  display: grid;
  grid-template-columns: 28.82% auto 30.56%;
  height: 100%;
  /* overflow: hidden; */
  width: 100%;
}

.room-home-about-left-img,
.room-home-about-right-img {
  display: block;
  width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
}

.room-home-about-text-content {
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.room-home-about-text-content > h5 {
  margin-bottom: 20px;
  font-size: 1.3em;
  text-transform: uppercase;
  letter-spacing: 4px;
}
.room-home-about-text-content > p {
  font-size: 1.1em;
  color: hsl(0, 0%, 63%);
  line-height: 1.5;
}

@media only screen and (max-width: 1057px) {
  .room-home-about {
    grid-template-columns: auto;
    grid-template-rows: 60% 40% 60%;
  }

  .room-home-about-text-content {
    flex-direction: row;
    padding: 0px 80px;
    align-items: center;
  }

  .room-home-about-text-content > h5 {
    margin: 0;
    margin-right: 40px;
    font-size: 2em;
  }
  .room-home-about-text-content > p {
    font-size: 1em;
    color: hsl(0, 0%, 63%);
    line-height: 1.5;
  }
}

@media only screen and (max-width: 600px) {
  .room-home-about {
    grid-template-rows: 250px 1fr 250px;
  }

  .room-home-about-text-content {
    padding: 40px 20px;
    flex-direction: column;
    align-items: flex-start;
  }

  .room-home-about-text-content > h5 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 1.5em;
  }
}

`
export default About
