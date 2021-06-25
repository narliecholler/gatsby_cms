import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }


  // mobile 
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    .LRContent, .LRImage {
      h2 {
        text-align: center;
      }
      p {
        width: 100%;
      }
      #repBtn {
        text-align: center;
      }
      width: 100%;
      text-align:center;
    }
    .LRContent {
      #repBtn {
      }
    }
  }
`

const ContentWrapper = styled.div`
  width: 50%;
  p {
    width: 95%;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    text-align: center;
    h2 {
      text-align: center;
    }
    p {
      width: 100%;
    }
    button {
      text-align: center;
    }
  }
`

const ImageWrapper = styled.div`
  width: 50%;

  text-align: right;
  div {
    border-radius: 5px;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    text-align: center;
  }
`

export {
  Container,
  ContentWrapper,
  ImageWrapper,
}
