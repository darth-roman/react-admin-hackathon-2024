import { DateField, NumberField, ReferenceField, Edit, SimpleShowLayout, TextField, SimpleForm, TextInput } from 'react-admin';

export const PayrolEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            {/* <ReferenceField disabled source="userId" reference="users" /> */}
            <TextInput source="user_name" />
            <TextInput source="salaire_base.gain_sb" />
            <TextInput source="retenue_ss.gain_ss" />
            <TextInput source="panier.gain_panier" />
            <TextInput source="transport.gain_transport" />
            <TextInput source="retenue_irg.gain_irg" />
            <NumberField source="net_pay" />
            <TextInput source="fonction" />
            <TextInput source="affectation" />
            <TextInput source="nccp" />
            <TextInput source="nss" />
            <TextInput source="familial_sit" />
            <DateField source="ent_date" />
        </SimpleForm>
    </Edit>
);