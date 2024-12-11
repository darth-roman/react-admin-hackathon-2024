import { DateInput, Edit, NumberInput, SelectInput, SimpleForm, TextInput, isRequired } from 'react-admin';

export const LeaveEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="employee_name" />
            <NumberInput source="leave_duration" />
            <DateInput source="leave_start" />
            <TextInput source="leave_type" />
            <SelectInput source="leave_status"
                choices={
                    [
                        {id: "Approved", name: "Approved"},
                        {id: "Pending", name: "Pending"},
                        {id: "Rejected", name: "Rejected"},
                    ]
                }
                validate={isRequired()}
            />
        </SimpleForm>
    </Edit>
);