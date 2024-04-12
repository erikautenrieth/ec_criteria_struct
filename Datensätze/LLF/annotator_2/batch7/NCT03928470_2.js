'INC'

'2.  Episode of heartburn for 3 months or more during prior to randomization visit .'

'2.  Episode of cond("heartburn") for eq(val("3"), temporal_unit(MONTH), op(GTEQ)) during prior to randomization visit .'

cond("heartburn")   
    .temporality(
        eq(val("3"), temporal_unit(MONTH), op(GTEQ)) 
    )