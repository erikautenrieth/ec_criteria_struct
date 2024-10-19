'EXC'

'-  Known active current or history of recurrent bacterial , viral , fungal , mycobacterial , or other infections;'

'-  Known eq(temporal_per(PRESENT)) or eq(temporal_per(PAST)) recurrent mod("bacterial") , mod("viral") , mod("fungal") , mod("mycobacterial") , or other cond("infections") ;'

cond("infections")
    .mod("bacterial")
    .mod("viral")
    .mod("fungal")
    .mod("mycobacterial")
    .temporality(
        or(
            eq(temporal_per(PAST)), 
            eq(temporal_per(PRESENT))
        )
    )