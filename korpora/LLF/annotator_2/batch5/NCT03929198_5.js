'INC'

'-  No diagnosis or treatment for cancer in the past year'

'-  neg() diagnosis or proc() for cond("cancer") in the eq(temporal_per(PAST), temporal_unit(YEAR))'

neg(
    proc()
        .for(
            cond("cancer")
                .temporality(
                    eq(temporal_per(PAST), temporal_unit(YEAR))
                )
        )
)