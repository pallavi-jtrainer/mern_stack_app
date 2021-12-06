import React from "react";
import { Form, Button } from "semantic-ui-react";

const Create = () => {
   return( 
    <Form className="create-form">
        <Form.Field>
            <label id="lab">First Name: </label>
            <input type="text" placeholder="First Name" />
        </Form.Field>
        <Form.Field>
            <label id="lab">Last Name: </label>
            <input type="text" placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
            <label id="lab">Salary: </label>
            <input type="text" placeholder="Salary" />
        </Form.Field>
        <Button type="submit">Submit</Button>
    </Form>
   )
}

export default Create;