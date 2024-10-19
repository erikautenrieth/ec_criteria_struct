'INC'

'-  index ICU stay with a diagnosis of sepsis or acute respiratory distress syndrome projected to be discharged alive as these patients are at the highest risk for developing PICS'

'-  index loc(unit("ICU")) enc(INPATIENT) with a diagnosis of cond("sepsis") or acute() cond("respiratory distress syndrome") projected to be discharged alive as these patients are at the pol(HIGH) risk() for developing cond("PICS")'

seq(
    enc(INPATIENT)
        .loc(unit("ICU")),
    during(
        union(
            cond("sepsis"),
            cond("respiratory distress syndrome")
                .acute()
        )
            .equiv(
                risk(
                    cond("PICS")
                )
                    .pol(HIGH)
            )
    )
)
