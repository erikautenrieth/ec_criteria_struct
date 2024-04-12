'EXC'

'8.  Any major trauma within prior six months , e . g . , burn injury , extremity crush injury , motor vehicle accident , etc .'

'8.  Any severity(SEVERE) obs("trauma") eq(op(LTEQ), temporal_per(PAST), val("six"), temporal_unit(MONTH)) , e . g . , obs("burn injury") , obs("extremity crush injury") , obs("motor vehicle accident") , etc .'

obs("trauma")
    .severity(SEVERE)
    .temporality(
        eq(op(LTEQ), temporal_per(PAST), val("six"), temporal_unit(MONTH))
    )
    .equiv(
        obs("burn injury"), 
        obs("extremity crush injury"), 
        obs("motor vehicle accident")
    )
    
    