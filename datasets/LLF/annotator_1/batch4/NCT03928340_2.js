'INC'

'-  Patients on insulin in the 3 rd trimester of pregnancy ( on insulin therapy since start of gestation )'

'-  Patients eq(temporal_per(PRESENT)) drug("insulin") in the eq(val("3 rd"), unit("trimester")) of cond("pregnancy") ( eq(temporal_per(PRESENT)) drug("insulin therapy") since eq(temporal_rec(FIRST_TIME)) of obs("gestation") )'

intersect(
    seq(
        drug("insulin"), 
        during(
            cond("pregnancy")
                .num_filter(
                    eq(val("3 rd"), unit("trimester"))
                )
        )
    ),
    seq(
        drug("insulin"), 
        during(
            obs("gestation"),
            eq(temporal_rec(FIRST_TIME))
        )
    )
)