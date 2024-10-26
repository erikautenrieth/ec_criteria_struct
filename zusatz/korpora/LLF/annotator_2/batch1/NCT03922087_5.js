'EXC'

'-  Pregnant women who are with gestational age more than 24 weeks ;'

'-  cond("Pregnant") female() who are with measurement("gestational age") eq(op(GT), val("24"), temporal_unit(WEEK)) ;'

intersect(
    female(),
    cond("Pregnant"),
    measurement("gestational age")
        .num_filter(
            eq(op(GT), val("24"), temporal_unit(WEEK))
        )
)