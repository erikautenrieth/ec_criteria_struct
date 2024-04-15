'INC'

'-  Medical history without major pathology'

'-  Medical eq(temporal_per(PAST)) neg() mod("major") cond("pathology")'

neg(
    cond("pathology")
        .mod("major")
        .temporality(
            eq(temporal_per(PAST)) 
        )
)