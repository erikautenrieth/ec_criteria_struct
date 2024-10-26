'EXC'

'1.  Patients who have been treated for more than 4 weeks .'

'1.  Patients who have been proc() for eq(op(GT), val("4"), temporal_unit(WEEK)) .'

proc()
    .duration(
        eq(op(GT), val("4"), temporal_unit(WEEK))
    )