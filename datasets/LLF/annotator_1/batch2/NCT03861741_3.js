'INC'

'1.  At least two relatives willing to participate in the screening programme .'

'1.  eq(op(GTEQ), val("two")) family_member() willing to participate participate in the screening programme .'

family_member()
    .min_count(
        eq(op(GTEQ), val("two"))
    )