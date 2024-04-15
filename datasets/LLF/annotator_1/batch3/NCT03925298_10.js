'EXC'

'-  those received heparin within 48 hours , resulting in an activated partial thromboplastin time greater than the upper limit of normal .'

'-  those eq(temporal_per(PAST)) drug("heparin") eq(op(LTEQ), val("48"), temporal_unit(HOUR)) , resulting in an mod("activated") lab("partial thromboplastin time") eq(op(GT), unit(REF_RANGE_HIGH)) .'

lab("partial thromboplastin time")
    .mod("activated")
    .num_filter(
        eq(op(GT), unit(REF_RANGE_HIGH))
    )
    .caused_by(
        drug("heparin")
            .temporality(
                eq(temporal_per(PAST), op(LTEQ), val("48"), temporal_unit(HOUR))
            )
    )