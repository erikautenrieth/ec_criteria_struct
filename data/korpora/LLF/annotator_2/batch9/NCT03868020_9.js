'EXC'

'-  Inability to tolerate lying supine , relatively motionless for up to 1 hour'

'-  contraindication() obs("lying supine") , mod("relatively motionless") for eq(op(LTEQ), val("1"), temporal_unit(HOUR))'

contraindication(
    obs("lying supine")
        . mod("relatively motionless")
        .duration(
            eq(op(LTEQ), val("1"), temporal_unit(HOUR))
        )
)