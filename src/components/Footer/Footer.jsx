import React from 'react'
import { FooterContainer, FooterInner, FooterBottom, FooterHeading } from './style'


const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <div>
          <FooterHeading>Socials</FooterHeading>
          <p>test@test.com</p>
          <p>test@test.com</p>
          <p>test@test.com</p>
        </div>
        <div>
          <FooterHeading>Our events</FooterHeading>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Repertoire</li>
            <li>Gallery</li>
            <li>Book us</li>
          </ul>
        </div>
        <div>
          <FooterHeading>Email</FooterHeading>
          <p>test@test.com</p>
        </div>
        <div>
          <FooterHeading>Boticelli Duet</FooterHeading>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </FooterInner>
      <FooterBottom>
        logo
        <p> Website created by Charlie</p>
      </FooterBottom>
    </FooterContainer>
  )
}

export default Footer