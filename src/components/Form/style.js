import styled from 'styled-components'
import Button from '../Button'


const Form = styled.form`
  width: 60%;
  margin: auto;
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

  label {

  }

  input {
    width: 100%;
    height: 40px;
    padding: 10px;
  }

  textarea {
    width: 100%;
  }

`

const FormButton = styled.button`
  width: 80%!important;
  height: 50px;
  color: red;
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