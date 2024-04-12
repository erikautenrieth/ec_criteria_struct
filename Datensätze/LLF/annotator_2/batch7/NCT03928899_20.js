'EXC'

'-  signs of labor ( regular painful contractions with cervical change ) before 37 weeks 6 days of gestation .'

'-  possible() of cond("labor") ( cond("regular painful contractions") with cond("cervical change") ) before eq(val("37"), temporal_unit(WEEK), val("6"), temporal_unit(DAY)) of obs("gestation") .'

seq(
    cond("labor")
        .possible()
        .equiv(
            intersect(
                cond("regular painful contractions"),
                cond("cervical change")
            )
        ),
    before(
        obs("gestation")
            .temporality(
                eq(val("37"), temporal_unit(WEEK), val("6"), temporal_unit(DAY))
            )
    )
)