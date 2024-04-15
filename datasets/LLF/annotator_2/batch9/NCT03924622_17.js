'EXC'

'-  Concern about ability to remain in the vacuum spine board for 120 minutes'

'-  contraindication() to obs("remain") in the mod("vacuum spine board") for eq(val("120"), temporal_unit(MINUTE))'

contraindication(
    obs("remain")
        .mod("vacuum spine board")
        .duration(
            eq(val("120"), temporal_unit(MINUTE))
        )
)