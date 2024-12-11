import React from "react"

import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    EmailField,
    SelectField
} from "react-admin"


const PeopleList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="gender" />
            <EmailField source="email" />
            <TextField source="salary"/>
            <TextField source="job" />
            <TextField source="category" />
            <TextField source="hours_per_week" />
            <EditButton source="/people" />
            <DeleteButton source="/people" />
        </Datagrid>
    </List>
}

export default PeopleList