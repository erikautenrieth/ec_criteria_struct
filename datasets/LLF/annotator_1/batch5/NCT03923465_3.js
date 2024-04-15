'INC'

'-  Having one isolated intrabony defect with probing depth ( PD ) ≥ 7 mm , clinical attachment level ( CAL ) ≥ 8 mm and at least 4 mm intrabony component involving predominantly the interproximal area of the affected tooth .'

'-  Having eq(val("one")) cond("isolated intrabony defect") with measurement("probing depth") ( obs("PD") ) eq(op(GTEQ), val("7"), unit("mm")) , obs("clinical attachment level") ( obs("CAL") ) eq(op(GTEQ), val("8"), unit("mm")) and eq(op(GTEQ), val("4"), unit("mm")) obs("intrabony component") involving predominantly the interproximal area of the affected tooth .'

intersect(
    cond("isolated intrabony defect")
        .min_count(eq(val("one"))), 
    measurement("probing depth")
        .equiv(
            obs("PD")
        )
        .num_filter(
            eq(op(GTEQ), val("7"), unit("mm"))
        ), 
    obs("clinical attachment level")
        .equiv("CAL")
        .num_filter(
            eq(op(GTEQ), val("8"), unit("mm"))
        ), 
    obs("intrabony component")
        .num_filter(    
            eq(op(GTEQ), val("4"), unit("mm"))
        )
)