export const calculateRetenueIGR = (record) => {
    const retenue = record.panier.gain_panier + record.salaire_base.gain_sb
    if (retenue >= 320001) {
        record.retenue_irg = (retenue - 320001) * 0.35 + 6400 + 10800 + 24000 + 52800
        return record
    }
    if (retenue < 320000 && retenue >= 160001) {
        record.retenue_irg = (retenue - 160001) * 0.33 + 6400 + 10800 + 24000
        return record 
    }
    if (retenue < 160000 && retenue >= 80001) {
        record.retenue_irg = (retenue - 80001) * 0.30 + 6400 + 10800
        return record 
    }
    if (retenue < 80000 && retenue >= 40001) {
        record.retenue_irg = (retenue - 40001) * 0.27 + 6400
        return record 
    }
    if (retenue < 40000 && retenue >= 20001) {
        record.retenue_irg = (retenue - 20001) * 0.23
        return record
    }
    record.retenue_irg = 0
    return record
}
