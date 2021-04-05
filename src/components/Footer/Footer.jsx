import React from 'react'
import { FooterContainer, FooterInner, FooterBottom, FooterHeading, FooterSection } from './style'


const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <FooterSection>
          <FooterHeading>Socials</FooterHeading>
          <p>test@test.com</p>
          <p>test@test.com</p>
          <p>test@test.com</p>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Our events</FooterHeading>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Repertoire</li>
            <li>Gallery</li>
            <li>Book us</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Email</FooterHeading>
          <p>test@test.com</p>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Boticelli Duet</FooterHeading>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </FooterSection>
      </FooterInner>
      <FooterBottom>
        logo
        <p> Website created by Charlie</p>
      </FooterBottom>
    </FooterContainer>
  )
}

export default Footer