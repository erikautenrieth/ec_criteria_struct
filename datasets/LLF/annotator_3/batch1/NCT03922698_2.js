'INC'

'-  patients with severe ( 70 - 99 % ) carotid stenosis , diagnosed with color doppler echography or angio - MRI or angiography ;'

'-  patients with severity(SEVERE) ( eq(op(BETWEEN), val("99"), unit("%")) ) cond("carotid stenosis") , diagnosed with proc("color doppler echography") or mod("angio") - proc("MRI") or proc("angiography") ;'

cond("carotid stenosis")
    .severity(SEVERE)
    .num_filter(
        eq(op(BETWEEN), val("99"), unit("%"))
    )
    .found_by(
        proc("color doppler echography"), 
        proc("MRI")
            .mod("angio"),
        proc("angiography")
    )
