import { Formik, Field, Form } from "formik";

export default function UserForm({ onUserFormSubmit }) {
  return (
    <div>
      <h1>Form</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log("Submitted values", values);
          onUserFormSubmit(values);
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name alok</label>
          <Field id="firstName" name="firstName" placeholder="Firt Name" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Last Nme" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="abc@mail.com"
            type="email"
          />

          <Field
            id="mobile"
            name="mobile"
            placeholder="Mobile No."
            type="text"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <userList />
    </div>
  );
}
