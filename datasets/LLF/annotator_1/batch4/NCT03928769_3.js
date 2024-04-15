'INC'

'-  Patient for whom a blood sample is planned on the day of the procedure'

'-  Patient for whom a spec("blood") obs("sample") is eq(temporal_per(FUTURE), proc("procedure")) on the day of the proc("procedure")'

seq(
    obs("sample")
        .spec("blood"),
    during(
        proc("procedure")
            .temporality(
                eq(temporal_per(FUTURE))
            )
    )
)