import styled from 'styled-components'

const LogoWrapper = styled.div`
  position: relative;
  width: 100%;

  p {
    font-family: ${({ theme }) => theme.font.cursive.family};
    font-size: ${props => props.size ? props.size : '25px'};
    font-weight: 700;
    color: ${props => props.color ? props.color : '#000'};

    @media only screen and (max-width: 476px) {
      font-size: 22px;
    }
  }
`

export default LogoWrapper