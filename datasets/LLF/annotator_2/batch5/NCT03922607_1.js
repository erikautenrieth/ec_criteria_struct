'INC'

'-  Volunteer with moderate to severe chronic plaque psoriasis between 18 and 75 years of age for Substudy 2 at the time of enrollment .'

'-  Volunteer with severity(MODERATE) to severity(SEVERE) chronic() cond("plaque psoriasis") eq(op(BETWEEN), val("18"), val("75"), temporal_unit(YEAR)) of age() for Substudy 2 at the time of enrollment .'

intersect(
    cond("plaque psoriasis")
        .severity(MODERATE)
        .severity(SEVERE)
        .chronic(),
    age()
        .num_filter(
            eq(op(BETWEEN), val("18"), val("75"), temporal_unit(YEAR))
        )
)