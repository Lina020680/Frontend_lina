import { useFormik, FormikProps } from 'formik';
import Button from "components/Button/Button";
import { FormComponent, InputsContainer } from "./styles";
import { FormProps } from './types';

function Form({ initialValues, validationSchema, onSubmit, children }: FormProps) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit,
  });

  return (
    <FormComponent onSubmit={formik.handleSubmit}>
      <InputsContainer>
        {children(formik)}
      </InputsContainer>
      <Button type="submit" name="Submit" />
    </FormComponent>
  );
}

export default Form;