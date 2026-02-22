import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validateSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string("Invalid email").required("Email is required"),
  password: Yup.string("Password most not be less than 10 characters").required("Password is required"),
});

const FormikForm = () => (
  <Formik initialValues={{ name: "", email: "", password: "" }} onSubmit={(data) => console.log(data)} validationSchema={validateSchema}>
    {() => (
      <Form style={{ display: "flex", alignItems: " center", flexDirection: "column", marginBlock: "3rem" }}>
        <label htmlFor="username">Username</label>
        <Field type="text" name="username"></Field>
        <ErrorMessage name="username" component="div" />

        <label htmlFor="email">Email</label>
        <Field type="email" name="email"></Field>
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Password</label>
        <Field type="password" name="password"></Field>
        <ErrorMessage name="password" component="div" />

        <button type="submit" style={{ marginTop: "1rem" }}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);
export default FormikForm;
