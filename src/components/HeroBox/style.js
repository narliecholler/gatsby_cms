import styled from 'styled-components'

const HeroBoxContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 20px;

  h1, p {
    color: #fff;
  }

  p {
    padding-bottom: 20px;
  }

  // mobile styles
  @media only screen and (max-width: 1024px) {
    display: block;
  }

`

export default HeroBoxContainer