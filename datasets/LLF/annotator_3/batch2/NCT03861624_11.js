'EXC'

'5.  Sustained severe spinal cord injury ( lower extremity paresis / paralysis )'

'5.  Sustained severity(SEVERE) mod("spinal cord") obs("injury") ( mod("lower extremity") cond("paresis") / cond("paralysis") )'


obs("injury")
    .severity(SEVERE)
    .mod("spinal cord")
    .equiv(
        union(
            cond("paresis"),
            cond("paralysis")
        )
            .mod("lower extremity")
    )
