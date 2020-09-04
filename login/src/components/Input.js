import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import './Input.css'

export default function Input() {
    return (
        <div className="mainContainer">
            <div className="container">
                <h1>Login</h1>
                <Formik
                    initialValues={{ name: "", email: "" }}
                    onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >

                    <Form>
                        <Field placeholder="UserName" className="input" name="email" type="email" />
                        <Field placeholder="Password" className="input" name="password" type="password" />
                        <button className="but" type="submit">Sign in</button>
                    </Form>

                </Formik>
            </div>
        </div>
    );
}
