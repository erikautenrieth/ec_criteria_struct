'INC'

'-  Inclusion criteria for study participants include : ( 1 ) age ≥ 60 years ; ( 2 ) English fluency ; ( 3 ) living independently in the community ; ( 4 ) self - reported demographic information that includes either the label of SCD or MCI'

'-  Inclusion criteria for study participants include : ( 1 ) age() eq(op(GTEQ), val("60"), temporal_unit(YEAR)) ; ( 2 ) lang("English") fluency ; ( 3 ) social_habit("living independently") in the community ; ( 4 ) self - reported demographic information that includes either the label of cond("SCD") or cond("MCI")'

intersect(
    age()
        .num_filter(
            eq(op(GTEQ), val("60"), temporal_unit(YEAR))
        ),
    lang("English"),
    social_habit("living independently"),
    union(
        cond("SCD"),
        cond("MCI")
    )
)
