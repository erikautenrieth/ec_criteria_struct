'INC'

'-  Absence of bone lesion or moderate knee osteoarthritis stage < 2 on the Kellgren Laurence scale ( objectified on radiography in schuss ) in the 6 months prior to inclusion'

'-  neg() of mod("bone") obs("lesion") or severity(MODERATE) mod("knee") cond("osteoarthritis") eq(unit("stage"), op(LT), val("2")) on the clin_score("Kellgren Laurence scale") ( objectified on proc("radiography") in mod("schuss") ) in the eq(val("6"), temporal_unit(MONTH)) prior to inclusion'

union(
    neg(
        obs("lesion")
            .mod("bone")
    ),
    cond("osteoarthritis")
        .severity(MODERATE)
        .mod("knee")
        .equiv(
            clin_score("Kellgren Laurence scale")
                .num_filter(
                    eq(unit("stage"), op(LT), val("2"))
                )
        )
        .found_by(
            proc("radiography")
                .mod("schuss")
        )
)
    .temporality(
        eq(val("6"), temporal_unit(MONTH))
    )
