import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validateSchema = Yup.object({
  username: Yup.string().required("username is required"),
  email: Yup.string("Invalid email").required("email is required"),
  password: Yup.string("password most not be less than 10 characters").required("password is required"),
});

const FormikForm = () => (
  <Formik initialValues={{ name: "", email: "", password: "" }} onSubmit={(data) => console.log(data)} validationSchema={validateSchema}>
    {() => (
      <Form style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBlock: "1rem", flexDirection: "column" }}>
        <Field type="text" name="username"></Field>
        <ErrorMessage name="username" component="div" />

        <Field type="email" name="email"></Field>
        <ErrorMessage name="email" component="div" />

        <Field type="password" name="password"></Field>
        <ErrorMessage name="password" component="div" />
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

export default FormikForm;
