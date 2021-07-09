import styled from 'styled-components'
import { theme } from '../../theme/theme'

const Form = styled.form`
  width: 60%;
  margin: auto;
  margin-bottom: 60px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  .formRow {
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 10px;
    text-align: center;

    &#nameRow {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;

      div {
        &:first-child {
          margin-right: 10px;
        }
        &:nth-child(2) {
          margin-left: 10px;
        }
      }
    }
  }
`

const FormField = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;

  // align first and surname together
  @media only screen and (min-width: 768px) {
    &:first-child, &:nth-child(2) {
      width: 45%;
    }

    &:first-child {
      float: left;
    }

    &:nth-child(2) {
      float: right;
    }
  }


  label {

  }

  input {
    width: 100%;
    height: 40px;
    padding: 10px;
  }

  textarea {
    padding: 10px;
    width: 100%;
    font-size: 16px;
  }

`

const FormButton = styled.button`

  background-color: ${theme.color.secondary};
  color: ${theme.color.primary};
`

const Error = styled.div`
  position: absolute;
  bottom: 0px;
  font-size: 13px;
  color: red;
`

export {
  Form,
  FormField,
  FormButton,
  Error,
}