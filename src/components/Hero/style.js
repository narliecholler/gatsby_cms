import styled from 'styled-components'

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  
  @media only screen and (max-width: 1200px) {
    flex-direction: column!important;
  }

  @media only screen and (min-width: 1201px) {
    margin-bottom: 100px;
    
    #heroImg {
      width: 70%;
    }
    
    #heroInfo {
      position: absolute;
      width: 40%;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
    }
  }

`

export default HeroContainer

