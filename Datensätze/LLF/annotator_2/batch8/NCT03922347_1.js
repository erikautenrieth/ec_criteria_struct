'INC'

'-  Inclusion criteria were living in one of the non - institutionalized urban or rural residential areas in one of the survey area , being resident in the same address for at least 6 months during the year before the enrolment , age 50 and over and Iranian nationality .'

'-  Inclusion criteria were living in one of the non - institutionalized urban or rural residential areas in one of the survey area , being resident in the stable() obs("address") for eq(op(GTEQ), val("6"), temporal_unit(MONTH)) during the year before the enrolment , age() eq(val("50"), op(GTEQ)) and ethnic("Iranian") nationality .'

intersect(
    obs("address")
        .stable()
        .duration(
            eq(op(GTEQ), val("6"), temporal_unit(MONTH))
        ),
    age()
        .num_filter(
            eq(val("50"), op(GTEQ))
        ),
    ethnic("Iranian")
)