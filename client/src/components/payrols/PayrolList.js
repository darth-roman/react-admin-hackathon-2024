import { Datagrid, DateField, FilterLiveSearch, List, NumberField, TextField, useRecordContext, HasOr, FilterList, FilterListItem, FilterListSection, FilterLiveForm, ReferenceInput, AutocompleteInput } from 'react-admin';
import { calculateRetenueIGR, calculateCNAS, calculateNetPay } from './ulitities/accounting';
import {Card, CardContent} from '@mui/material'
import CategoryIcon from "@mui/icons-material/LocalOffer";

const MyTextField = (props) => {
    const record = useRecordContext(props)
    if (!record) {
        return null
    }
    return <TextField sx={{fontWeight: "bolder"}}  source='retenue_irg' record={calculateRetenueIGR(record)} />
}

const CNASTextField = (props) => {
    const record = useRecordContext(props)
    if (!record) {
        return null
    }
    return <TextField sx={{fontWeight: "boolder"}} source='retenue_ss.gain_ss' record={calculateCNAS(record)} />
}

const NetPayTextField = (props) => {
    const record = useRecordContext(props)
    if (!record) {
        return null
    }
    return <TextField sx={{fontWeight: "boolder"}} source='net_pay' record={calculateNetPay(record)} />
}

const FilterSidebar = () => {
    <Card sx={{order: -1, mr: 2, mt: 9, width:200}}>
        <CardContent>
            <FilterList label='Department' icon={<CategoryIcon />}>
                <FilterListItem label="Dev" value={{}} />
                <FilterListItem label="Design" value={{ year_gte: 1900, year_lte: 1999 }} />
                <FilterListItem label="Finance" value={{ year_gte: 1800, year_lte: 1899 }} />
            </FilterList>
            <FilterListSection>
                <FilterLiveForm>
                    <ReferenceInput>
                        <AutocompleteInput helperText={false} />
                    </ReferenceInput>
                </FilterLiveForm>
            </FilterListSection>
        </CardContent>
    </Card>
}
export const PayrolList = () => (
    <List aside={<FilterSidebar />}>
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