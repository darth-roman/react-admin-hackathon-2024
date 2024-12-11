export const calculateRetenueIGR = (record) => {
    const retenue = record.panier.gain_panier + record.salaire_base.gain_sb
    const CATEGORY_1 = 6400
    const CATEGORY_2 = 10800
    const CATEGORY_3 = 24000
    const CATEGORY_4 = 52800
    let TO_REDUCE = 0
    if (retenue >= 320001) {
        TO_REDUCE = 0.35
        record.retenue_irg = Math.round((retenue - 320001) * TO_REDUCE + CATEGORY_1 + CATEGORY_2 + CATEGORY_3 + CATEGORY_4)
        return record
    }
    if (retenue < 320000 && retenue >= 160001) {
        TO_REDUCE = 0.33
        record.retenue_irg = Math.round((retenue - 160001) * TO_REDUCE + CATEGORY_1 + CATEGORY_2 + CATEGORY_3)
        return record 
    }
    if (retenue < 160000 && retenue >= 80001) {
        TO_REDUCE = 0.30
        record.retenue_irg = Math.round((retenue - 80001) * TO_REDUCE + CATEGORY_1 + CATEGORY_2)
        return record 
    }
    if (retenue < 80000 && retenue >= 40001) {
        TO_REDUCE = 0.27
        record.retenue_irg = Math.round((retenue - 40001) * TO_REDUCE + CATEGORY_1)
        return record 
    }
    if (retenue < 40000 && retenue >= 20001) {
        TO_REDUCE = 0.23
        record.retenue_irg = Math.round((retenue - 20001) * TO_REDUCE)
        return record
    }
    record.retenue_irg = 0
    return record
}

export const calculateCNAS = (record) => {
    const retenue = record.transport.gain_transport + record.salaire_base.gain_sb
    const TO_REDUCE = 0.09
    record.retenue_ss.gain_ss = Math.round(retenue*TO_REDUCE)
    return record
}

export const calculateNetPay = (record) => {
    const benifits = record.salaire_base.gain_sb + record.transport.gain_transport + record.panier.gain_panier
    const expenses = record.retenue_irg + record.retenue_ss.gain_ss
    record.net_pay = benifits - expenses 
    return record
}