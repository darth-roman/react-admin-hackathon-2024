import { Datagrid, DateField, List, NumberField, TextField, useRecordContext } from 'react-admin';
import { calculateRetenueIGR } from './ulitities/accounting';

const MyTextField = (props) => {
    const record = useRecordContext(props)
    if (!record) {
        return null
    }
    return <TextField  source='retenue_irg' record={calculateRetenueIGR(record)} />
}


export const PayrolList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="user_name" />
            <NumberField source="salaire_base.gain_sb" label="Gain"/>
            <NumberField source="retenue_ss.gain_ss" label="Retenue SS"/>
            <NumberField source="panier.gain_panier" label="Panier" />
            <NumberField source="net_pay" label="Net Pay" />
            <TextField source="fonction" label="Funtion" />
            <MyTextField label="IRG"/>
            <TextField source="affectation" label="Affectation" />
            <TextField source="nccp" label="CCP" />
            <TextField source="nss" label="Social Security Number" />
            <TextField source="familial_sit" label="Familial Situation" />
            <DateField source="ent_date" label="Entry Date" />
        </Datagrid>
    </List>
);