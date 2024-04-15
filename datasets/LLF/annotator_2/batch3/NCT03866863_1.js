'INC'

'-  All birth more than 24 + 0 weeks of amenorrhea at the maternity ward of the hospital Femme - Mère - Enfant'

'-  All birth() eq(op(GT), val("24"), temporal_unit(WEEK)) of cond("amenorrhea") at the loc(unit("maternity ward of the hospital Femme - Mère - Enfant"))'

intersect(
    birth(),
    cond("amenorrhea")
        .duration(
            eq(op(GT), val("24"), temporal_unit(WEEK))
        )
)
    .loc(unit("maternity ward of the hospital Femme - Mère - Enfant"))
