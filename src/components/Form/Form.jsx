import React from 'react'
import { Form, FormField, Error, FormButton } from './style'
import { useFormik, Field } from 'formik'
import * as yup from 'yup'
import { theme } from '../../theme/theme'

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    },
    validationSchema: yup.object({
      firstName:
        yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required*'),
      lastName:
        yup.string()
          .max(20, 'Must be 20 characters or less'),
      email:
        yup.string()
          .email('Invalid email address')
          .required('Required*'),
      message:
        yup.string()
          .max(200, 'Must be 200 characters or less')
          .required('Required*')
    })
  })

  return (
    <Form name='boticelli-contact' method='POST' netlify-honeypot="bot-field" netlify enctype='application/x-www-form-urlencoded'>
      <input type="hidden" name="form-name" value="boticelli-contact" />
      <div id='nameRow' className="formRow">
        <FormField>
          <label htmlFor="firstName">First Name*</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          >
          </input>
          {
            formik.touched.firstName && formik.errors.firstName ? (
              <Error className="formError">{formik.errors.firstName}</Error>
            ) : null
          }
        </FormField>
        <FormField>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          >
          </input>
          {formik.touched.lastName && formik.errors.lastName ? (
            <Error className="formError">{formik.errors.lastName}</Error>
          ) : null}
        </FormField>
      </div >
      <div className="formRow">
        <FormField>
          <label htmlFor="email">Your Email*</label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          >
          </input>
          {formik.touched.email && formik.errors.email ? (
            <Error className="formError">{formik.errors.email}</Error>
          ) : null}
        </FormField>
      </div>
      <div className="formRow">
        <FormField>
          <label htmlFor="message">Your Message*</label>
          <textarea
            id="message"
            name="message"
            type="text"
            rows='10'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          >
          </textarea>
          {formik.touched.message && formik.errors.message ? (
            <Error className="formError">{formik.errors.message}</Error>
          ) : null}
        </FormField>
      </div>
      <div className="formRow">
        <button type='submit'>
          submit
        </button>
      </div>
    </Form >
  )
}

export default ContactForm