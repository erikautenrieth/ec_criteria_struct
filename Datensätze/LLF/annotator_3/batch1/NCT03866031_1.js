'INC'

'1.  the patient should be completely edentulous for at least 6 months .'

'1.  the patient should be completely cond("edentulous") for eq(op(GTEQ), val("6"), temporal_unit(MONTH)) .'

cond("edentulous")
    .duration(
        eq(op(GTEQ), val("6"), temporal_unit(MONTH))
    )