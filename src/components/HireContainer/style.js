import styled from 'styled-components'

const Wrapper = styled.div`
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

  .venueImgs {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 20px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    p {
      width: 80%;
    }
  }

  @media only screen and (max-width: 768px) {
    .venueImgs {
      flex-direction: column;
      width: 80%;
      margin: auto;
    }
  }

    @media only screen and (max-width: 414px) {
    p {
      width: 100%;
    }
    .venueImgs {
      width: 100%;
    }
  }


`

export default Wrapper