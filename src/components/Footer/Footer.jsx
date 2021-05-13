import React from 'react'
import { Link } from 'gatsby'
import { theme } from '../../theme/theme'
import Logo from '../Logo'
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
            <li>
              <Link activeStyle={{ textDecoration: 'underline' }} to='/'>Home</Link>
            </li>
            <li>
              <Link activeStyle={{ textDecoration: 'underline' }} to='/about'>About</Link>
            </li>
            <li>
              <Link activeStyle={{ textDecoration: 'underline' }} to='/repertoire'>Repertoire</Link>
            </li>
            <li>
              <Link activeStyle={{ textDecoration: 'underline' }} to='/contact'>Get in touch</Link>
            </li>
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
        <Logo
          size='20px'
          color={theme.color.primary}
          text='Boticelli Duet'
        />
        <p>Website developed by Charlie</p>
      </FooterBottom>
    </FooterContainer>
  )
}

export default Footer