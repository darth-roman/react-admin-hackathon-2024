import React from "react"

import {
    TextField,
    EditButton,
    DeleteButton,
    TextInput,
    Edit,
    SimpleForm
} from "react-admin"

const PostEdit = (props) => {
    return <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="gender" />
            <TextInput source="email" />
            <TextInput source="salary"/>
            <TextInput source="job" />
            <TextInput source="category" />
            <EditButton source="/people" />
            <DeleteButton source="/people" />
        </SimpleForm>
    </Edit>
}

export default PostEdit