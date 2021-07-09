import React, { useReducer, useCallback } from 'react'
import Button from '../Button'
import { Form, FormField, Error, FormButton } from './style'


const ContactForm = () => {
  const formValues = {
    firstName: {
      id: 1,
      label: 'First Name',
      name: 'firstName',
      val: '',
      error: true,
    },
    lastName: {
      id: 2,
      label: 'Last Name',
      name: 'lastName',
      val: '',
      error: false, // last name not required.
    },
    email: {
      id: 3,
      label: 'Your Email',
      name: 'email',
      val: '',
      error: true,
    },
    message: {
      id: 4,
      label: 'Your Message',
      name: 'message',
      val: '',
      error: true,
    }
  }

  const formReducer = (prevState, { field, value }) => {
    return {
      ...prevState,
      [field]: {
        ...prevState[field],
        val: value,
      }
    }
  }

  const [formState, formDispatch] = useReducer(formReducer, formValues)

  const handleChange = useCallback((e, field) => {
    const { target: { value } } = e
    formDispatch({ field, value })
  }, [])

  return (
    <Form method="POST" action="#" name="contact" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      {
        Object.entries(formState)
          .map(([field, value]) => {
            const { label, name, val, error } = value

            return (
              <FormField key={field}>
                <label htmlFor={name}>{label}</label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    value={val}
                    name={name}
                    type="text"
                    onChange={(e) => handleChange(e, field)}
                    rows="10"
                  />
                ) : (
                  <input
                    id={field}
                    name={name}
                    value={val}
                    type="text"
                    onChange={(e) => handleChange(e, field)}
                  />
                )}
                {error ?? (
                  <Error className="formError">{`Please enter your ${label}`}</Error>
                )}
              </FormField>
            )
          })
      }
      <FormButton type='submit'>
        SUBMIT
      </FormButton>
    </Form>
  )
}

export default ContactForm