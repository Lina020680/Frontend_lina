import { FormikProps } from 'formik';

export interface FormProps {
  initialValues: any; 
  validationSchema: any;
  onSubmit: (values: any) => void | Promise<any>; 
  children: (formik: FormikProps<any>) => JSX.Element; 
}