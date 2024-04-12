'INC'

'-  Subjects must be able to walk for at least 5 minutes and willing and able to participate over a 1 - 6 hours experiment with breaks and rest enforced regularly and as needed .'

'-  Subjects must be obs("able to walk") for eq(op(GTEQ), val("5"), temporal_unit(MINUTE)) and willing and cond("able to participate") over a eq(val("1"), op(BETWEEN), val("6"), temporal_unit(HOUR)) experiment with breaks and rest enforced regularly and as needed .'

intersect(
    obs("able to walk")
        .duration(
            eq(op(GTEQ), val("5"), temporal_unit(MINUTE))
        ), 
    cond("able to participate")
        .duration(
            eq(val("1"), op(BETWEEN), val("6"), temporal_unit(HOUR))
        )
)