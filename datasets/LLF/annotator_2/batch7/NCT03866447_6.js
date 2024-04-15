'EXC'

'3.  Patients on any topical or systemic medication within 4 weeks before enrollment .'

'3.  Patients on any mod("topical") or mod("systemic") drug() eq(op(LTEQ), val("4"), temporal_unit(WEEK)) before enrollment .'

drug()
    .mod("topical")
    .mod("systemic")
    .temporality(
        eq(op(LTEQ), val("4"), temporal_unit(WEEK))
    )