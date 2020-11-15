import styled from 'styled-components'
import theme from '../../theme'

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${theme.colours.seconday};
  color: ${theme.colours.primary};
`

const FooterInner = styled.div`
  margin: 0 auto;
  padding: 4.5rem 2.5rem;
  display: flex;
  justify-content: center;
`

export {
  FooterContainer,
  FooterInner,
}