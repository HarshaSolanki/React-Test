import React, { useState } from "react";
import "./App.css";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { DatePicker, Select, Checkbox, Radio } from "antd";

const FormSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your first name"),
  lname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your last name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email id"),
  number: Yup.string().max(10).required("Please enter valid number"),
  password: Yup.string()
    .min(
      8,
      "Password must be 8 characters",
      "Password contain 1 special characters"
    )
    .max(10, "Strong")
    .required("Please enter password"),
  dob: Yup.date()
    .max(new Date(), "Date must be in the past or today")
    .required("Date of Birth is required"),
  state: Yup.string().required("Please enter state"),
});

function App() {
  const [value, setValue] = useState(1);

  const onChange = (date, dateString, e) => {
    console.log(date, dateString);
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <>
      <div className="container">
        <div className="form-style">
          <Formik
            initialValues={{
              fname: "",
              lname: "",
              email: "",
              number: "",
              password: "",
              dob: "",
              state: "",
            }}
            validationSchema={FormSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="name">
                      First name <span className="error">*</span>
                    </label>
                    <Field
                      type="text"
                      name="fname"
                      id="fname"
                      className="form-control"
                    />
                    {errors.fname && touched.fname ? (
                      <div className="error">{errors.fname}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="name">
                      Last name <span className="error">*</span>
                    </label>
                    <Field
                      type="text"
                      name="lname"
                      id="lname"
                      className="form-control"
                    />
                    {errors.lname && touched.lname ? (
                      <div className="error">{errors.lname}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="name">
                      Email <span className="error">*</span>
                    </label>
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                    />
                    {errors.email && touched.email ? (
                      <div className="error">{errors.email}</div>
                    ) : null}{" "}
                    {/* nested bcoz && and ternary opration both performed */}
                  </div>
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="name">
                      Phone number <span className="error">*</span>
                    </label>
                    <Field
                      type="number"
                      name="number"
                      id="number"
                      className="form-control"
                    />
                    {errors.number ? (
                      <div className="error">{errors.number}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="name">Alternate Phone number</label>
                    <Field
                      type="number"
                      name="number1"
                      id="number1"
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="name">
                      DOB <span className="error">*</span>
                    </label>
                    <DatePicker
                      id="dob"
                      name="dob"
                      onChange={onChange}
                      className="form-control"
                    />
                    {errors.dob && touched.dob ? (
                      <div className="error">{errors.dob}</div>
                    ) : null}{" "}
                  </div>
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="name">
                      Hobbies <span className="error">*</span>
                    </label>
                    <div>
                      <Select
                        showSearch
                        placeholder="Select"
                        onChange={onChange}
                        onSearch={onSearch}
                        mode="multiple"
                        className="col-12"
                      >
                        <option value="Travel">Travel</option>
                        <option value="Socialize">Socialize</option>
                        <option value="Dance">Dance</option>
                      </Select>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="name">
                      Gender <span className="error">*</span>
                    </label>
                    <div>
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>Male</Radio>
                        <Radio value={2}>Female</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="name">
                      Address <span className="error">*</span>
                    </label>
                    <textarea rows={3} className="form-control" />
                  </div>
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="name">
                      State <span className="error">*</span>
                    </label>
                    <div>
                      <Select
                        id="state"
                        name="state"
                        showSearch
                        placeholder="Select"
                        onChange={onChange}
                        onSearch={onSearch}
                        className="col-12"
                      >
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                      </Select>
                      {errors.state && touched.state ? (
                        <div className="error">{errors.state}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="name">
                      Password <span className="error">*</span>
                    </label>
                    <Field
                      type="text"
                      name="password"
                      id="password"
                      className="form-control"
                    />
                    {errors.password && touched.password ? (
                      <div className="error">{errors.password}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="name">
                      Confirm Password <span className="error">*</span>
                    </label>
                    <Field
                      type="text"
                      name="conf-pwd"
                      id="conf-pwd"
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-12 mb-4">
                    <Checkbox onChange={onChange}>Nationality Indian</Checkbox>
                  </div>
                </div>
                <button type="submit"> Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default App;
