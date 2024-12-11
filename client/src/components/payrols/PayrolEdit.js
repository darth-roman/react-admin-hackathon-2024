import { DateField, NumberField, ReferenceField, Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const PayrolEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            {/* <ReferenceField disabled source="userId" reference="users" /> */}
            <TextInput source="user_name" />
            <NumberInput source="salaire_base.gain_sb" />
            <NumberInput source="retenue_ss.gain_ss" />
            <NumberInput source="panier.gain_panier" />
            <NumberInput source="transport.gain_transport" />
            <NumberInput source="retenue_irg.gain_irg" />
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