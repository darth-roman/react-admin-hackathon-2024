import { Datagrid, DateField, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const LeaveList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="people" label="Employee"/>
            <NumberField source="employee_name" />
            <NumberField source="leave_duration" />
            <DateField source="leave_start" />
            <TextField source="leave_type" />
            <TextField source='leave_status' />
        </Datagrid>
    </List>
);