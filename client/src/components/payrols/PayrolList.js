import { Datagrid, DateField, List, NumberField, TextField, useRecordContext } from 'react-admin';
import { calculateRetenueIGR, calculateCNAS, calculateNetPay } from './ulitities/accounting';

const MyTextField = (props) => {
    const record = useRecordContext(props)
    if (!record) {
        return null
    }
    return <TextField  source='retenue_irg' record={calculateRetenueIGR(record)} />
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
export const PayrolList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="user_name" />
            <NumberField source="salaire_base.gain_sb" label="Gain"/>
            <NumberField source="panier.gain_panier" label="Panier" />
            <NumberField source='transport.gain_transport' label="Transport" />
            <MyTextField label="IRG"/>
            <CNASTextField label="CNAS" />
            <NetPayTextField label="Net Pay" />
            <TextField source="fonction" label="Funtion" />
            <TextField source="affectation" label="Affectation" />
            <TextField source="nccp" label="CCP" />
            <TextField source="nss" label="Social Security Number" />
            <TextField source="familial_sit" label="Familial Situation" />
            <DateField source="ent_date" label="Entry Date" />
        </Datagrid>
    </List>
);