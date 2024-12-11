import { DateField, NumberField, Create, SimpleForm, TextInput, DateInput } from 'react-admin';

export const PayrolCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="user_name" />
            <TextInput source="salaire_base.gain_sb" />
            <TextInput source="retenue_ss.gain_ss" />
            <TextInput source="panier.gain_panier" />
            <TextInput source="transport.gain_transport" />
            {/* <NumberField source="net_pay" /> */}
            <TextInput source="fonction" />
            <TextInput source="affectation" />
            <TextInput source="nccp" />
            <TextInput source="nss" />
            <TextInput source="familial_sit" />
            <DateInput source="ent_date" />
        </SimpleForm>
    </Create>
);