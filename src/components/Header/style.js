import styled from 'styled-components'
import theme from '../../theme'

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div #bookLink {
    border: 1px solid ${theme.colours.secondary};
    border-radius: 18px;
    font-weight: 700;
    font-size: 14px;
    padding: 0.4em 1em 0.3em 1.2em;
    transform: uppercase;
  }
`

export default HeaderContainer