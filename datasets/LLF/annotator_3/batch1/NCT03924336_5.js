'INC'

'-  No history of intake of antibiotics or other medications affecting the periodontium in the previous 6 months .'

'-  neg() eq(temporal_per(PAST)) of intake of drug("antibiotics") or other drug() change() the obs("periodontium") in the eq(op(LTEQ), val("6"), temporal_unit(MONTH)) .'

neg(
    union(
        drug("antibiotics"),
        obs("periodontium")
            .caused_by(
                drug()
            )
            .change()
    )
        .temporality(
            and(
                eq(temporal_per(PAST)),
                eq(op(LTEQ), val("6"), temporal_unit(MONTH))
            )
        )       
)
