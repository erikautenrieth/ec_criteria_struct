'EXC'

'-  > 8 consecutive weeks of seizure freedom during the 12 weeks prior to screening'

'-  eq(op(GT), val("8"), temporal_unit(WEEK)) of cond("seizure") neg() during the eq(val("12"), temporal_unit(WEEK)) prior to screening'

neg(
    cond("seizure")
        .duration(
            eq(op(GT), val("8"), temporal_unit(WEEK))
        )
)