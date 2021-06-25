import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 80%;
  margin-bottom: 100px;

  p {
    width: 60%;
    padding-bottom: 25px;
    margin: auto;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    p {
      width: 80%;
    }
  }

  @media only screen and (max-width: 414px) {
    p {
      width: 100%;
    }
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    margin: auto;
  }

  @media only screen and (max-width: 414px) {
    width: 100%;
  }
`

export {
  Container,
  ImageWrapper,
}