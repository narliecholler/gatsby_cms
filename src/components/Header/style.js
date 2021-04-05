import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 80%;
  margin: auto;
  height: 120px;
  font-family: 'Roboto Condensed';
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.primary};
`

export default HeaderContainer
