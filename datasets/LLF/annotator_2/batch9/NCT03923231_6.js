'INC'

'1.  Pregnant ( > 20 weeks )'

'1.  cond("Pregnant") ( eq(op(GT), val("20"), temporal_unit(WEEK)) )'

cond("Pregnant")
    .num_filter(
        eq(op(GT), val("20"), temporal_unit(WEEK))
    )