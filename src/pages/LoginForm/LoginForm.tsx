import { useNavigate } from "react-router-dom"
import Form from "components/Form/Form"
import Input from "components/Input/Input"
import * as Yup from "yup"

const LoginForm = () => {
  const navigate = useNavigate()

  const initialValues = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("E-Mail-Adresse ist erforderlich")
      .email("Muss eine gültige E-Mail-Adresse sein"),
    password: Yup.string().required("Passwort ist erforderlich"),
  })

  const onSubmit = (values: any) => {
    console.log(values)
  }

  const goToRegister = () => {
    navigate("/register")
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
            name="email"
            placeholder="E-Mail-Adresse eingeben"
            label="E-Mail-Adresse"
            onInputChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
            onBlur={formik.handleBlur}
          />
          <Input
            name="password"
            type="password"
            placeholder="Passwort eingeben"
            label="Passwort"
            onInputChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password}
            onBlur={formik.handleBlur}
          />
          <button type="submit">Anmelden</button>
          <button type="button" onClick={goToRegister}>
            Registrieren
          </button>
        </>
      )}
    </Form>
  )
}

export default LoginForm
