import { DateField, NumberField, Create, SimpleForm, TextInput, DateInput, NumberInput } from 'react-admin';

export const PayrolCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="user_name" />
            <NumberInput source="salaire_base.gain_sb" />
            <NumberInput source="retenue_ss.gain_ss" />
            <NumberInput source="panier.gain_panier" />
            <NumberInput source="transport.gain_transport" />
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