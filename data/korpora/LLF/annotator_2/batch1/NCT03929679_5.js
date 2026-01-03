'INC'

'-  Available and documented haemoglobin A 1c ( HbA 1c ) value less than or equal to 12 weeks prior to initiation of semaglutide treatment'

'-  Available and documented lab("haemoglobin A 1c") ( lab("HbA 1c") ) value eq(op(LTEQ), val("12"), temporal_unit(WEEK)) prior to eq(temporal_rec(FIRST_TIME)) of drug("semaglutide") proc()'

seq(
    proc(),
    before(
        lab("haemoglobin A 1c")
            .equiv(
                lab("HbA 1c")
            )
            .num_filter(
                eq(op(LTEQ), val("12"), temporal_unit(WEEK)
            )
    ),
    after(
        intersect(
            proc(),
            drug("semaglutide")
        )
            .temporality(
                eq(temporal_rec(FIRST_TIME)))
            )
    )
)