import styled from 'styled-components'

const HeadingOne = styled.h1`
  font-size: 25px;
  text-align: ${props => props.align ? props.align : 'left'};
  font-family: 'White Angelica';
`
const HeadingTwo = styled.h2`
  font-size: 22px;
  text-align: ${props => props.align ? props.align : 'left'};
  font-family: 'White Angelica';
`
const HeadingThree = styled.h3`
  font-size: 20px;
  text-align: ${props => props.align ? props.align : 'left'};
  font-family: 'White Angelica';
`
const HeadingFour = styled.h4`
  font-size: 18px;
  text-align: ${props => props.align ? props.align : 'left'};
  font-family: 'White Angelica';
  
`

const Underline = styled.span`
  display: block;
  position: relative;
  width: 20%;
  height: 3px;
  min-height: 3px;
  background: ${props => props.color ? props.color : '#fff'};
  margin-bottom: 20px;
  margin-top: 5px;
`

export {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  Underline,
}