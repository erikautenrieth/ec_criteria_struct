'INC'

'-  Biochemical recurrence after radical prostatectomy ( Definition : Serial elevation of PSA over 0.2 ng / mL and < = 1.0 ng / mL )'

'-  obs("Biochemical recurrence") after proc("radical prostatectomy") ( Definition : Serial pol(HIGH) of lab("PSA") eq(op(GT), val("0.2"), unit("ng"), unit("mL")) and eq(op(LTEQ), val("1.0"), unit("ng"), unit("mL")) )'

seq(
    obs("Biochemical recurrence")
        .equiv(
            lab("PSA")
                .pol(HIGH)
                .num_filter(
                    and(
                        eq(op(GT), val("0.2"), unit("ng"), unit("mL")), 
                        eq(op(LTEQ), val("1.0"), unit("ng"), unit("mL"))
                    )
                )
        ),
    after(
        proc("radical prostatectomy")
    )
)