'INC'

'-  the carer has face - to - face contact with the person with YOD at least twice a week ;'

'-  the carer has obs("face - to - face contact") with the person with cond("YOD") eq(op(GTEQ), val("twice"), per(WEEK)) ;'

intersect(
    obs("face - to - face contact"),
    cond("YOD")
        .min_count(
            eq(op(GTEQ), val("twice"), per(WEEK))
        )
)
