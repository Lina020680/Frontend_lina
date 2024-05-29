import { useFormik, FormikProps } from 'formik';
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
    </FormComponent>
  );
}

export default Form;