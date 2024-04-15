'INC'

'-  ( 4 ) having routine prenatal visits and plan to have the birth in the medical center'

'-  ( 4 ) eq(temporal_per(PRESENT)) routine mod("prenatal") enc(OUTPATIENT) and eq(temporal_per(FUTURE)) to have the birth() in the loc(hosp("medical center"))'

intersect(
    enc(OUTPATIENT)
        .mod("prenatal")
        .temporality(
            eq(temporal_per(PRESENT))
        ), 
    birth()
        .temporality(
            eq(temporal_per(FUTURE))
        )
        .loc(hosp("medical center"))
)