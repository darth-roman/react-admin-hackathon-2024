import { DateField, NumberField, Show, SimpleShowLayout, TextField, useRecordContext } from 'react-admin';
import { calculateRetenueIGR, calculateCNAS, calculateNetPay } from './ulitities/accounting';

const IRGTextField = (props) => {
    const record = useRecordContext(props)
    if (!record) {
        return null
    }
    return <TextField sx={{fontWeight: "bolder", fontSize: 20}} source='retenue_irg' record={calculateRetenueIGR(record)} />
}

const CNASTextField = (props) => {
    const record = useRecordContext(props)
    if (!record) {
        return null
    }
    return <TextField sx={{fontWeight: "bolder", fontSize: 20}} source='retenue_ss.gain_ss' record={calculateCNAS(record)} />
}

const NetPayTextField = (props) => {
    const record = useRecordContext(props)
    if (!record) {
        return null
    }
    return <TextField sx={{fontWeight: "bolder", fontSize: 20}} source='net_pay' record={calculateNetPay(record)} />
}
export const PayrolShow = () => (
    <Show sx={{fontSize: 25}}>
        <SimpleShowLayout>
            <TextField sx={{fontSize: 20}} source="id" label="ID" />
            <TextField sx={{fontSize: 20}} source="user_name" label="Nom / Prenom" />
            <TextField sx={{fontSize: 20}} source="salaire_base.gain_sb" label="Salaire Base"/>
            <TextField sx={{fontSize: 20}} source="panier.gain_panier" label="Panier" />
            <TextField sx={{fontSize: 20}} source="transport.gain_transport" label="Transport" />
            <IRGTextField label="IRG" />
            <CNASTextField label="CNAS" />
            <NetPayTextField label="Net Pay" />
            <TextField sx={{fontSize: 20}} source="fonction" label="Fonction" />
            <TextField sx={{fontSize: 20}} source="affectation" label="Affectation" />
            <TextField sx={{fontSize: 20}} source="nccp" label="Numero CCP" />
            <TextField sx={{fontSize: 20}} source="nss" label="Numero Securite Social" />
            <TextField sx={{fontSize: 20}} source="familial_sit" label="Situation Familiale" />
            <DateField source="ent_date" label="Date d'Entree" />
        </SimpleShowLayout>
    </Show>
);