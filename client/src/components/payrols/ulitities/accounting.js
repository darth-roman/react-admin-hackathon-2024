export const calculateRetenueIGR = (record) => {
    const retenue = record.panier.gain_panier + record.salaire_base.gain_sb
    const CATEGORY_1 = 6400
    const CATEGORY_2 = 10800
    const CATEGORY_3 = 24000
    const CATEGORY_4 = 52800
    const TO_REDUCE = 0
    if (retenue >= 320001) {
        TO_REDUCE = 0.35
        record.retenue_irg = (retenue - 320001) * TO_REDUCE + CATEGORY_1 + CATEGORY_2 + CATEGORY_3 + CATEGORY_4
        // record.retenue_irg = Math.floor((retenue - 320001) * 0.35 + 6400 + 10800 + 24000 + 52800)
        return record
    }
    if (retenue < 320000 && retenue >= 160001) {
        TO_REDUCE = 0.33
        record.retenue_irg = (retenue - 160001) * TO_REDUCE + CATEGORY_1 + CATEGORY_2 + CATEGORY_3
        return record 
    }
    if (retenue < 160000 && retenue >= 80001) {
        TO_REDUCE = 0.30
        record.retenue_irg = (retenue - 80001) * TO_REDUCE + CATEGORY_1 + CATEGORY_2
        return record 
    }
    if (retenue < 80000 && retenue >= 40001) {
        TO_REDUCE = 0.27
        record.retenue_irg = (retenue - 40001) * TO_REDUCE + CATEGORY_1
        return record 
    }
    if (retenue < 40000 && retenue >= 20001) {
        TO_REDUCE = 0.23
        record.retenue_irg = (retenue - 20001) * TO_REDUCE
        return record
    }
    record.retenue_irg = 0
    return record
}
