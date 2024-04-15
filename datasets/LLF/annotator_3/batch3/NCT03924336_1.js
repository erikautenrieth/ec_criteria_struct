'INC'

'-  Stage III periodontitis patient having at least one tooth with 2 - wall , 3 - wall , or combined 2 - to 3 - wall intraosseous defect ≥ 3 mm in depth ( assessed by bone sounding , radiographic examination ) with clinical attachment level ( CAL ) ≥ 5 mm and pocket depth ( PD ) ≥ 6 mm .'

'-  eq(unit("Stage"), val("III")) cond("periodontitis") patient having eq(op(GTEQ), val("one"), unit("tooth")) with mod("2 - wall") , mod("3 - wall") , or combined mod("2 - to 3 - wall") obs("intraosseous defect") eq(op(GTEQ), val("3"), unit("mm")) in depth ( assessed by proc("bone sounding") , proc("radiographic examination") ) with obs("clinical attachment level") ( obs("CAL") ) eq(op(GTEQ), val("5"), unit("mm")) and obs("pocket depth") ( obs("PD") ) eq(op(GTEQ), val("6"), unit("mm")) .'

intersect(
    cond("periodontitis")
        .num_filter(
            eq(unit("Stage"), val("III"))
        ),
    obs("intraosseous defect")
        .min_count(
            eq(op(GTEQ), val("one"), unit("tooth"))
        )
        .mod("2 - wall")
        .mod("3 - wall")
        .mod("2 - to 3 - wall")
        .num_filter(
            eq(op(GTEQ), val("3"), unit("mm"))
        )
        .found_by(
            proc("bone sounding"),
            proc("radiographic examination")
        ),
    obs("clinical attachment level")
        .equiv(
            obs("CAL")
        )
        .num_filter(
            eq(op(GTEQ), val("5"), unit("mm"))
        ),
    obs("pocket depth")
        .equiv(
            obs("PD")
        )
        .num_filter(
            eq(op(GTEQ), val("6"), unit("mm"))
        )
)
