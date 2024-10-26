'EXC'

'1.  Current injury is a pathologic fracture'

'1.  eq(temporal_per(PRESENT)) obs("injury") is a mod("pathologic") cond("fracture")'

intersect(
    obs("injury")
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    cond("fracture")
        .mod("pathologic")
)