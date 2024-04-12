'EXC'

'-  Participant has received any systemic ( including oral ) antibiotic treatment within 4 weeks prior to the Baseline visit .'

'-  Participant has eq(temporal_per(PAST)) any mod("systemic") ( including mod("oral") ) drug("antibiotic") proc() eq(op(LTEQ), val("4"), temporal_unit(WEEK)) prior to the Baseline visit .'

proc()
    .temporality(
        eq(temporal_per(PAST))
    )
    .equiv(
        drug("antibiotic")
            .mod("systemic")
            .mod("oral")
    )
    .temporality(
        eq(op(LTEQ), val("4"), temporal_unit(WEEK))
    )
    