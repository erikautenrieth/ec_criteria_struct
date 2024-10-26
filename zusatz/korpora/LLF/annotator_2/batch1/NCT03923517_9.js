'EXC'

'-  the person with YOD the carer is caring for has a different dementia cause other than FTD or AD or the diagnosis is older than 12 months ;'

'-  the person with cond("YOD") the carer is caring for has a different cond("dementia") cond() except() cond("FTD") or cond("AD") or the diagnosis is eq(op(GT), val("12"), temporal_unit(MONTH)) ;'

intersect(
    cond("YOD"),
    cond("dementia")
)
    .caused_by(
        cond()
            .except(
                cond("FTD"),
                cond("AD")
            )
    )
    .duration(
        eq(op(GT), val("12"), temporal_unit(MONTH))
   )
