'EXC'

'-  Uncontrolled asthma 2 weeks after stopping LABA treatment .'

'-  change() cond("asthma") eq(val("2"), temporal_unit(WEEK)) after stopping drug("LABA") proc() .'

seq(
    cond("asthma")
        .change(),
    after(
        proc()
            .for(
                drug("LABA")
            )
            .temporality(
                eq(val("2"), temporal_unit(WEEK))
            )
    )
)