import React from "react"

import {
    TextField,
    EditButton,
    DeleteButton,
    UrlField,
    Create,
    SimpleForm
} from "react-admin"

const PostCreate = (props) => {
    return <Create {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="gender" />
            <UrlField source="email" />
            <TextField source="salary"/>
            <TextField source="job" />
            <TextField source="category" />
            <EditButton source="/people" />
            <DeleteButton source="/people" />
        </SimpleForm>
    </Create>
}

export default PostCreate