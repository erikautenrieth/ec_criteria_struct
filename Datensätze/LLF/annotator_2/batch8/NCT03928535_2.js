'INC'

'-  Extubation must be performed after 48 hours of invasive ventilation'

'-  proc("Extubation") must be performed after eq(val("48"), temporal_unit(HOUR)) of mod("invasive") proc("ventilation")'
seq(
    proc("Extubation"),
    after(
        proc("ventilation")
            .mod("invasive")
            .temporality(
                eq(val("48"), temporal_unit(HOUR))
            )
    )
)