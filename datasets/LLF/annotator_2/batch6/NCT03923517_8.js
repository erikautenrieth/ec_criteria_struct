'EXC'

'-  the carer has face - to - face contact with the person with YOD less than twice a week ;'

'-  the carer has obs("face - to - face contact") with the person with cond("YOD") eq(op(LT), val("twice"), per(WEEK)) ;'

intersect(
    obs("face - to - face contact"),
    cond("YOD")
        .temporality(
            eq(op(LT), val("twice"), per(WEEK))
        )
)