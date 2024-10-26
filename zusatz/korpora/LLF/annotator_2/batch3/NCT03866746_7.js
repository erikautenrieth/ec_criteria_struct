'EXC'

'-  panretinal photocoagulation ( PRP ) within the former 4 months .'

'-  proc("panretinal photocoagulation") ( proc("PRP") ) eq(op(LTEQ), temporal_per(PAST), val("4"), temporal_unit(MONTH)) .'

proc("panretinal photocoagulation")
    .equiv(
        proc("PRP")
    )
    .duration(
        eq(op(LTEQ), temporal_per(PAST), val("4"), temporal_unit(MONTH))
    )