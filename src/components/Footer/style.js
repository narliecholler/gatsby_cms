import styled from 'styled-components'

const FooterContainer = styled.div`
  width: 100vw; 
  left: 0;
  background-color: ${({ theme }) => theme.color.secondary};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 30px 30px;
`

const FooterInner = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 50px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

const FooterSection = styled.div`
  width: 25%;
  color: ${({ theme }) => theme.color.primary};
  p {
    color: ${({ theme }) => theme.color.primary};
  }

  ul {
    li {
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.color.primary};
        font-weight: 400;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 30px;
  }
`

const FooterBottom = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  width: 80%;
  margin: auto;
  padding-top: 25px;
  text-align: center;
  border-top: 1px solid #fff;

  div {
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const FooterHeading = styled.h5`
  font-size: 22px;
  padding-bottom: 15px;
  color: ${({ theme }) => theme.color.primary};
  @media only screen and (max-width: 768px) {
    padding-bottom: 5px;
  }
`

export {
  FooterContainer,
  FooterInner,
  FooterBottom,
  FooterHeading,
  FooterSection,
}