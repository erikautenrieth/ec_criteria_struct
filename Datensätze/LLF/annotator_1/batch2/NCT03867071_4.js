'INC'

'-  patient with hemoglobin between 9 and 13 g / dl at the time of admission on trauma department'

'-  patient with lab("hemoglobin") eq(op(BETWEEN), val("9"), val("13"), unit("g"), unit("dl")) at the time of enc(INPATIENT) on loc(unit("trauma department"))'

seq(
    lab("hemoglobin")
        .num_filter(
            eq(op(BETWEEN), val("9"), val("13"), unit("g"), unit("dl"))
        ), 
    during(
        enc(INPATIENT)
            .loc(unit("trauma department"))
        )
)