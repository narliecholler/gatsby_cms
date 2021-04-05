import styled from 'styled-components'
import Heading from '../Heading'

const ImageBoxContainer = styled.div`
  position: relative;
  margin: 0 25px;

  .venuOverlay {
    position: absolute;
    width: 100%;
    height: 97%;
    background: black;
    opacity: 0.65;
    z-index: 99;
  }
`

const OverlayHeading = styled(Heading)`
  position: absolute!important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.color.white};
  z-index: 99;
  text-transform: uppercase;
  font-weight: 700;
`

export {
  ImageBoxContainer,
  OverlayHeading,
}