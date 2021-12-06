import React from "react";
import { Button, Form } from "semantic-ui-react";

const Update = () => {
    return(
        <Form>
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
            <Button type="submit">Update</Button>
        </Form>
    )
}

export default Update;