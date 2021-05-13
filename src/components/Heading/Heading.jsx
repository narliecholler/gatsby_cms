import React from 'react'
import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  Underline,
} from './style'

const Heading = ({
  heading,
  text,
  underline,
  underlineColor,
  align,
  className,
}) => {

  switch (heading) {
    case 'h1':
      return (
        <>
          <HeadingOne className={className} align={align}>{text}</HeadingOne>
          { underline && (<Underline color={underlineColor} className="underline" />)}
        </>
      )
    case 'h2':
      return (
        <>
          <HeadingTwo className={className} align={align}>{text}</HeadingTwo>
          { underline && (<Underline color={underlineColor} className="underline"></Underline>)}
        </>
      )
    case 'h3':
      return (
        <>
          <HeadingThree className={className} align={align}>{text}</HeadingThree>
          { underline && (<Underline color={underlineColor} className="underline"></Underline>)}
        </>
      )
    case 'h4':
      return (
        <>
          <HeadingFour className={className} align={align}>{text}</HeadingFour>
          { underline && (<Underline color={underlineColor} className="underline"></Underline>)}
        </>
      )
    default:
      return (
        <>
          <HeadingOne className={className} align={align}>{text}</HeadingOne>
          { underline && (<Underline color={underlineColor} className="underline"></Underline>)}
        </>
      )
  }
}

export default Heading