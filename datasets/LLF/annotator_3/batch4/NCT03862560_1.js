'INC'

'-  Caucasian , Healthy participant , from 12 to 20 years old , with a history of training at least 3 years .'

'-  ethnic("Caucasian") , cond("Healthy") participant , from eq(val("12"), op(BETWEEN), val("20"), temporal_unit(YEAR)) age() , with a eq(temporal_per(PAST)) of social_habit("training") eq(op(GTEQ), val("3"), temporal_unit(YEAR)) .'

intersect(
    ethnic("Caucasian"),
    cond("Healthy"),
    age()
        .num_filter(
            eq(val("12"), op(BETWEEN), val("20"), temporal_unit(YEAR))
        ),
    social_habit("training")
        .temporality(
            eq(temporal_per(PAST))
        )
        .duration(
            eq(op(GTEQ), val("3"), temporal_unit(YEAR))
        )
)