'INC'

'- Patients followed for hematological diseases in Lyon Sud Hospital'

'- Patients enc() for cond("hematological diseases") in loc(hosp("Lyon Sud Hospital"))'

seq(
    enc()
        .loc(hosp("Lyon Sud Hospital")),
    during(
        cond("hematological diseases")
    )
)