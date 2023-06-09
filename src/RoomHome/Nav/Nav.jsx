import React from 'react'
import logo from '../assets/room-homepage-master/images/logo.svg'
import styled from 'styled-components'

const Nav = ({nav}) => {

    const handleHamburger = () => {
        document.querySelector(".room-home-header-hamburger").classList.toggle('room-home-header-hamburger-active')

        const nav = document.querySelector('.room-home-nav-mobile')

        nav.classList.toggle('room-home-nav-mobile-active')

    }

    return (
        <Wrapper>
            <header className="room-home-header">
                        <div class="room-home-header-hamburger" onClick={handleHamburger}>
                            <div class="room-home-header-hamburger__slice"></div>
                            <div class="room-home-header-hamburger__slice"></div>
                            <div class="room-home-header-hamburger__slice"></div>
                        </div>

                <nav className="room-home-nav-mobile">
                    <ul className="room-home-nav-links-mobile">
                        {nav.map((link)=>(
                        <li className="room-home-nav-link-item-mobile">
                            <a href="." className="room-home-nav-link-mobile">
                                {link}
                            </a>
                        </li>
                        ))}
                    </ul>
                </nav>

                <nav className="room-home-nav">
                    <img src={logo} alt="" className="room-home-logo"/>
                    <ul className="room-home-nav-links">
                        {nav.map((link)=>(
                        <li className="room-home-nav-link-item">
                            <a href="." className="room-home-nav-link">
                                {link}
                            </a>
                        </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    /* NAV  */

.room-home-header {
  position: absolute;
  top: 60px;
  left: 60px;
  z-index: 1000;
  display: flex;
  justify-content: center;
}

.room-home-nav {
  display: flex;
}
.room-home-nav > img {
  margin-right: 50px;
  height: 100%;
  display: block;
}
.room-home-nav > ul {
  display: flex;
  list-style-type: none;
}
.room-home-nav > ul > li {
}
.room-home-nav > ul > li > a {
  text-decoration: none;
  margin-right: 25px;
  text-transform: lowercase;
  position: relative;
  color: white;
  font-size: 1.3em;
}

.room-home-nav > ul > li > a:before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  height: 2px;
  width: 0%;
  background-color: white;
  transition: all 0.4s ease-in-out;
}

.room-home-nav > ul > li > a:hover::before {
  width: 100%;
}

.room-home-nav-links-mobile {
  display: none;
}

@media only screen and (max-width: 600px) {
  .room-home-header {
    width: 100%;
    left: 0px;
    top: 0px;
    padding: 40px 20px;
    display: block;
  }
  .room-home-nav {
    justify-content: center;
  }
  .room-home-nav > ul {
    display: none;
  }

  .room-home-nav > img {
    margin-right: 0px;
  }

  /* MOBILE NAV  */

  .room-home-nav-mobile {
    width: 100%;
    position: absolute;
    top: 0;
    margin-left: -20px;
    height: 0px;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
    opacity: 0;
  }

  .room-home-nav-mobile-active {
    height: 120px;
    opacity: 1;
  }

  .room-home-nav-links-mobile {
    display: block;
    display: flex;
    list-style-type: none;
    /* border: 1px solid red; */
    padding: 50px 80px;
    background-color: white;
    /* height: 0px; */
    /* height: 100%; */
  }
  .room-home-nav-link-item-mobile {
  }
  .room-home-nav-link-mobile {
    text-decoration: none;
    margin-right: 25px;
    text-transform: lowercase;
    color: hsl(0, 0%, 27%);
    /* height: 0px; */
    font-size: 1.2em;
    position: relative;
  }

  .room-home-nav-link-mobile::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 2px;
    width: 0%;
    background-color: hsl(0, 0%, 27%);
    transition: all 0.4s ease-in-out;
  }

  .room-home-nav-link-mobile:hover::before {
    width: 100%;
  }

  /* HAMBURGER  */

  .room-home-header-hamburger {
    width: 20px;
    height: 14px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    top: 12px;
    z-index: 5000;
  }
  .room-home-header-hamburger__slice {
    width: 100%;
    height: 2px;
    background-color: white;
    transition: transform 0.3s, background-color 0.3s;
  }

  .room-home-header-hamburger-active
    .room-home-header-hamburger__slice:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
    background-color: hsl(0, 0%, 63%);
  }
  .room-home-header-hamburger-active
    .room-home-header-hamburger__slice:nth-child(2) {
    visibility: hidden;
  }
  .room-home-header-hamburger-active
    .room-home-header-hamburger__slice:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
    background-color: hsl(0, 0%, 63%);
  }
}

`
export default Nav
