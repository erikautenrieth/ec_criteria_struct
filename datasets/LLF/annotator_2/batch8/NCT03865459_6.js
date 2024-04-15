'EXC'

'-  any analgesic used 24 hours before cystoscopy'

'-  any drug("analgesic") used eq(val("24"), temporal_unit(HOUR)) before proc("cystoscopy")'

seq(
    drug("analgesic"),
    before(
        proc("cystoscopy")
            .temporality(
                eq(val("24"), temporal_unit(HOUR))
            )
    )
)