import { DateField, NumberField, Show, SimpleShowLayout, TextField, useRecordContext } from 'react-admin';
import { calculateRetenueIGR } from './ulitities/accounting';

const MyTextField = (props) => {
    const record = useRecordContext(props)
    if (!record) {
        return null
    }
    return <TextField source='retenue_irg' record={calculateRetenueIGR(record)} />
}
export const PayrolShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="user_name" />
            <TextField source="salaire_base.gain_sb" />
            <TextField source="retenue_ss.gain_ss" />
            <TextField source="panier.gain_panier" />
            <TextField source="transport.gain_transport" />
            <MyTextField label="IRG" />
            <NumberField source="net_pay" />
            <TextField source="fonction" />
            <TextField source="affectation" />
            <TextField source="nccp" />
            <TextField source="nss" />
            <TextField source="familial_sit" />
            <DateField source="ent_date" />
        </SimpleShowLayout>
    </Show>
);