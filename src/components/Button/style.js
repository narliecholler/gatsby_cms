import styled from 'styled-components'
import { Link } from 'gatsby'

const BtnContainer = styled.div`
  width: auto;
  position: relative;
  margin: 30px 0;
  text-align: ${props => props.align ? props.align : 'left'};
`

const Btn = styled(Link)`
  padding: 10px 30px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${props => props.background ? props.background : '#fff'};
  color: ${props => props.color ? props.color : '#fff'};
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.secondary};
    border-color: ${({ theme }) => theme.color.secondary};
  }
`

export {
  BtnContainer,
  Btn,
}