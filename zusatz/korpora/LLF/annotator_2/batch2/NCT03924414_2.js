'INC'

'-  Current PD diagnosis with symptoms severity at Hoehn & Yahr ( H&Y ) stage 1 - 4 based on an expert assessment ( movement disorders neurologist report or telemedicine evaluation )'

'-  eq(temporal_per(PRESENT)) cond("PD") diagnosis with symptoms severity at cond("Hoehn & Yahr") ( cond("H&Y") ) eq(unit("stage"), val("1"), op(BETWEEN), val("4")) based on an expert assessment ( cond("movement disorders") prov("neurologist") report or enc(OUTPATIENT) evaluation )'

cond("PD")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .equiv(
        cond("Hoehn & Yahr")
            .equiv(
                cond("H&Y")
            )
            .num_filter(
                eq(unit("stage"), val("1"), op(BETWEEN), val("4"))
            )
            .found_by(
                cond("movement disorders"),
                enc(OUTPATIENT)
            )
            .prov("neurologist") 
    )