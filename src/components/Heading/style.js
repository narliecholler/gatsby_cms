import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 100%;
`

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${props => props.align === 'center' ? 'center' : 'flex-start'};
  flex-direction: column;
`

const Title = styled.h1`
  display: inline-block;
  font-size: 25px;
  font-family: 'White Angelica';
`

const Underline = styled.span`
  display: block;
  position: relative;
  width: 50px;
  height: 3px;
  min-height: 3px;
  background: ${props => props.color ? props.color : '#fff'};
  margin-bottom: 20px;
  margin-top: 10px;
`

export {
  Container,
  HeadingWrapper,
  Title,
  Underline,
}