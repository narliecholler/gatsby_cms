import styled from 'styled-components'

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 30px 0;
`

const FooterInner = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  > div {
    width: 25%;
  }
  padding-bottom: 50px;
`

const FooterBottom = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  width: 80%;
  margin: auto;
  padding-top: 25px;
  text-align: center;
  border-top: 1px solid #fff;
`

const FooterHeading = styled.h5`
  font-size: 20px;
  padding-bottom: 15px;
`

export {
  FooterContainer,
  FooterInner,
  FooterBottom,
  FooterHeading,
}