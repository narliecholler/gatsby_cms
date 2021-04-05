import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;

  .LRContent, .LRImage {
    width: 50%;
  }

  .LRContent {
    p {
      width: 95%;
    }
  }


  .LRImage {
    text-align: right;
    div {
      border-radius: 5px;
    }
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }


  // mobile 
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    .LRContent, .LRImage {
      width: 100%;
    }
    .LRContent {
      #repBtn {
      }
    }
  }
`

export default Container
