import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store/store"
import { setMessage, sendRegistration } from "store/redux/auth/authSlice"
import Form from "components/Form/Form"
import Input from "components/Input/Input"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"; 

function RegisterForm() {
  const dispatch = useDispatch()
  const formValues = useSelector((state: RootState) => state.auth.values)
  const formMessage = useSelector((state: RootState) => state.auth.message)
  const [resent, setResent] = useState(false)
  const navigate = useNavigate(); 

  const initialValues = {
    username: "",
    email: "",
    password: "",
    checkbox: false,
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Benutzername ist erforderlich")
      .min(2, "Mindestens 2 Zeichen")
      .max(15, "Maximal 15 Zeichen")
      .matches(/^[A-Za-z0-9]+$/, "Nur lateinische Buchstaben sind erlaubt"),
    email: Yup.string()
      .required("E-Mail-Adresse ist erforderlich")
      .email("Muss eine gültige E-Mail-Adresse sein"),
    password: Yup.string()
      .required("Passwort ist erforderlich")
      .min(8, "Mindestens 8 Zeichen")
      .max(60, "Maximal 60 Zeichen")
      .matches(/[a-z]/, "Mindestens 1 Kleinbuchstabe")
      .matches(/[A-Z]/, "Mindestens 1 Großbuchstabe")
      .matches(/[0-9]/, "Mindestens 1 Ziffer"),
    checkbox: Yup.boolean().oneOf([true], "Checkbox muss akzeptiert werden"),
  })
  
  const onSubmit = (values: any) => {
    console.log(values)
    dispatch(setMessage("Wir haben dir eine E-Mail geschickt."))
    dispatch(sendRegistration())
    navigate("/login"); 
  }

  const handleResend = () => {
    setResent(true)
    console.log("Resent email")
  }

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open("https://www.gesetze-im-internet.de/", "_blank")
  }

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <>
          <Input
            name="username"
            placeholder="Benutzername eingeben"
            label="Benutzername"
            onInputChange={formik.handleChange}
            value={formik.values.username}
            error={
              formik.errors.username
                ? formik.errors.username.toString()
                : undefined
            }
            onBlur={formik.handleBlur}
          />
          <Input
            name="email"
            placeholder="E-Mail-Adresse eingeben"
            label="E-Mail-Adresse"
            onInputChange={formik.handleChange}
            value={formik.values.email}
            error={
              formik.errors.email ? formik.errors.email.toString() : undefined
            }
            onBlur={formik.handleBlur}
          />
          <Input
            name="password"
            type="password"
            placeholder="Passwort eingeben"
            label="Passwort"
            onInputChange={formik.handleChange}
            value={formik.values.password}
            error={
              formik.errors.password
                ? formik.errors.password.toString()
                : undefined
            }
            onBlur={formik.handleBlur}
          />
          <div>
            <input
              type="checkbox"
              name="checkbox"
              checked={formik.values.checkbox}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label>
              <span
                onClick={handleCheckboxClick}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Ich akzeptiere die Bedingungen
              </span>
            </label>
            {formik.errors.checkbox && (
              <div style={{ color: "red" }}>
                {formik.errors.checkbox.toString()}
              </div>
            )}
          </div>
          <button type="submit">Konto erstellen</button>
          {formMessage && <div>{formMessage}</div>}
          {formMessage && (
            <button type="button" onClick={handleResend} disabled={resent}>
              {resent ? "Erneut gesendet" : "Erneut senden"}
            </button>
          )}
        </>
      )}
    </Form>
  )
}

export default RegisterForm;