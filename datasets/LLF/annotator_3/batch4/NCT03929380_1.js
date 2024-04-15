'INC'

'-  Males , with at least a year of experience in heavylift exercises , age between 20 and 35 years .'

'-  male() , with eq(op(GTEQ), temporal_unit(YEAR)) of experience in mod("heavylift") social_habit("exercises") , age() eq(op(BETWEEN), val("20"), val("35"), temporal_unit(YEAR)) .'

intersect(
    male(),
    social_habit("exercises")
        .duration(
            eq(op(GTEQ), temporal_unit(YEAR))
        )
        .mod("heavylift"),
    age()
        .num_filter(
            eq(op(BETWEEN), val("20"), val("35"), temporal_unit(YEAR))
        )
)
