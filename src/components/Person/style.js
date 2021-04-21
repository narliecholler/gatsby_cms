import styled, { css } from 'styled-components'

const PersonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  margin-bottom: 80px;
  ${props => props.reverse && css`
    flex-direction: row-reverse;
  `}


  @media only screen and (max-width: 1024px) {
    width: 100%;
  }

  @media only screen and (max-width: 414px) {
    flex-direction: column;
    margin-bottom: 50px;
  }


`

const TextCol = styled.div`
  width: 50%;

  @media only screen and (max-width: 414px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

const ImageCol = styled.div`
  width: 50%;
  text-align: center;

  @media only screen and (max-width: 414px) {
    width: 100%;
  }
`

export {
  PersonContainer,
  TextCol,
  ImageCol,
}