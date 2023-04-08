import React, { useState} from 'react'
// import './Hero.css'
import arrowLeft from '../assets/room-homepage-master/images/icon-angle-left.svg'
import arrowRight from '../assets/room-homepage-master/images/icon-angle-right.svg'
import iconArrow from '../assets/room-homepage-master/images/icon-arrow.svg'
import styled from 'styled-components'

const Hero = ({slider}) => {

    const [currentIndex,setCurrentIndex] = useState(0)

    const handleClick = (direction) => {

        const imgs = document.querySelectorAll('.room-home-hero-img') 
        const text = document.querySelector('.room-home-hero-text-content-wrapper')

        text.classList.add('room-home-hero-text-content-wrapper-fade-in')

        if (direction === 'prev') {
            if (currentIndex < 1) {
                setCurrentIndex(2)
                imgs.forEach((img)=>(
                    img.style.transform = 'translateX(-200%)'
                ))
            } else {
                setCurrentIndex(prev => prev - 1)
                imgs.forEach((img)=>(
                    img.style.transform = `translateX(${(currentIndex - 1) * -100}%)`
                ))
            }
        } 
        else {
            if (currentIndex === 2) {
                setCurrentIndex(0)
                imgs.forEach((img)=>(
                    img.style.transform = 'translateX(0)'
                ))
            } else {
                setCurrentIndex(prev => prev + 1)
                imgs.forEach((img)=>(
                    img.style.transform = `translateX(${(currentIndex + 1) * -100}%)`
                ))
            }
        }

       setTimeout(()=>{
            text.classList.remove('room-home-hero-text-content-wrapper-fade-in')
       },800 )
    }

    return (
        <Wrapper>
            <section className="room-home-hero">
                <div className="room-home-hero-slider">
                    <div className="room-home-hero-slider-container">
                    <div className="room-home-hero-img-wrapper">
                        <img src={slider[0].imgDesktop}
                         srcSet={`${slider[0].imgDesktop}, ${slider[0].imgMobile} 400w`}
                          alt="" className="room-home-hero-img"/>
                        <img src={slider[1].imgDesktop}
                        srcSet={`${slider[1].imgDesktop}, ${slider[1].imgMobile} 400w`} alt="" className="room-home-hero-img"/>
                        <img src={slider[2].imgDesktop}
                        srcSet={`${slider[2].imgDesktop}, ${slider[2].imgMobile} 400w`} alt="" className="room-home-hero-img"/>
                    </div>
                    </div>
                    <div className="room-home-hero-nav">
                        <button className="room-home-hero-nav-btn" 
                        onClick={()=>handleClick('prev')}>
                            <img src={arrowLeft} alt="" className="room-home-hero-nav-arrow"/>
                        </button>
                        <button className="room-home-hero-nav-btn" 
                        onClick={()=>handleClick('next')}>
                            <img src={arrowRight} alt="" className="room-home-hero-nav-arrow"/>
                        </button>
                    </div>
                </div>
                <div className="room-home-hero-text-content-wrapper">
                    <h4 className="room-home-hero-text-content-title">
                        {slider[currentIndex].title}
                    </h4>
                    <p className="room-home-hero-text-content-desc">
                        {slider[currentIndex].text}
                    </p>
                    <button className="room-home-hero-text-content-cta">
                        <p>SHOP NOW</p>
                        <img src={iconArrow} alt=""/>
                    </button>
                </div>
            </section>
        </Wrapper>
    )
}
const Wrapper = styled.section`
.room-home-hero {
  /* border: 5px solid red; */
  display: grid;
  grid-template-columns: auto calc(30.56% + 160px);
}

/* HERO SLIDER  */

.room-home-hero-slider {
  /* border: 5px solid yellow; */
  position: relative;
}

.room-home-hero-slider-container {
  width: 100%;
  overflow: hidden;
}

.room-home-hero-img-wrapper {
  height: 63vh;
  max-height: 63vh;
  display: flex;
  width: 300%;
  /* border: 1px solid red; */
}

.room-home-hero-img-wrapper > img {
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */
  display: block;
  object-fit: cover;
  transform: translateX(0%);
  transition: all 0.6s ease-in-out;
}

.room-home-hero-nav {
  display: flex;
  position: absolute;
  bottom: 0;
  right: -100px;
  padding-bottom: 20px;
}
.room-home-hero-nav-btn {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: hsl(0, 0%, 0%);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}

.room-home-hero-nav-btn:hover {
  background-color: hsl(0, 0%, 27%);
}

.room-home-hero-nav-arrow {
  height: 20px;
  opacity: 0.8;
}

/* - Dark Gray: hsl(0, 0%, 63%)
- Black: hsl(0, 0%, 0%)
- White: hsl(0, 0%, 100%)
- Very Dark Gray: hsl(0, 0%, 27%)  */

/* HERO TEXT  */

.room-home-hero-text-content-wrapper {
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  /* border: 5px solid salmon; */
}

.room-home-hero-text-content-wrapper-fade-in {
  animation: room-fade-in 0.8s ease-in-out;
}

@keyframes room-fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.room-home-hero-text-content-title {
  font-size: 3em;
  font-weight: 600;
  margin-bottom: 20px;
}

.room-home-hero-text-content-desc {
  color: hsl(0, 0%, 63%);
  font-size: 1.2em;
  margin-bottom: 10px;
  line-height: 1.5;
}

.room-home-hero-text-content-cta {
  display: flex;
  letter-spacing: 10px;
  font-size: 1em;
  background-color: transparent;
  padding: 10px 0px;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  font-weight: 600;
}

.room-home-hero-text-content-cta:hover {
  opacity: 0.5;
}

.room-home-hero-text-content-cta > img {
  margin-left: 20px;
  transition: all 0.4s ease-in-out;
}

.room-home-hero-text-content-cta:hover > img {
  margin-left: 30px;
}

@media only screen and (max-width: 1057px) {
  .room-home-hero-nav {
    bottom: 0;
    right: 0px;
  }
  .room-home-hero {
    display: flex;
    flex-direction: column;
  }
  .room-home-hero-img-wrapper {
    height: 500px;
  }
}

@media only screen and (max-width: 600px) {
  .room-home-hero-img-wrapper {
    /* height: auto; */
    /* min-height: 300px; */
    max-height: 380px;
  }

  .room-home-hero-nav-btn {
    width: 60px;
    height: 60px;
  }

  .room-home-hero-text-content-wrapper {
    padding: 40px 20px;
  }

  .room-home-hero-text-content-desc {
    margin-bottom: 20px;
  }
}

@media only screen and (max-width: 375px) {
  .room-home-hero-nav-btn {
    width: 50px;
    height: 50px;
  }
}

`
export default Hero
