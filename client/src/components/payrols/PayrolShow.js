import { DateField, NumberField, Show, SimpleShowLayout, TextField, useRecordContext } from 'react-admin';
import { calculateRetenueIGR, calculateCNAS, calculateNetPay } from './ulitities/accounting';

const IRGTextField = (props) => {
    const record = useRecordContext(props)
    if (!record) {
        return null
    }
    return <TextField source='retenue_irg' record={calculateRetenueIGR(record)} />
}

const CNASTextField = (props) => {
    const record = useRecordContext(props)
    if (!record) {
        return null
    }
    return <TextField source='retenue_ss.gain_ss' record={calculateCNAS(record)} />
}

const NetPayTextField = (props) => {
    const record = useRecordContext(props)
    if (!record) {
        return null
    }
    return <TextField source='net_pay' record={calculateNetPay(record)} />
}
export const PayrolShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="user_name" />
            <TextField source="salaire_base.gain_sb" />
            <TextField source="panier.gain_panier" />
            <TextField source="transport.gain_transport" />
            <IRGTextField label="IRG" />
            <CNASTextField label="CNAS" />
            <NetPayTextField label="Net Pay" />
            <TextField source="fonction" />
            <TextField source="affectation" />
            <TextField source="nccp" />
            <TextField source="nss" />
            <TextField source="familial_sit" />
            <DateField source="ent_date" />
        </SimpleShowLayout>
    </Show>
);