'EXC'

'-  Participants unable to abduct upper - extremity perpendicular to body or to stand comfortably without aid for several minutes , both of which are necessary to perform a LymphaTech Scan'

'-  Participants neg() to cond("abduct") mod("upper - extremity perpendicular to body") or to obs("stand") pol(NORMAL) without aid for eq(op(GT), temporal_unit(MINUTE)) , both of which are necessary to perform a LymphaTech Scan'

neg(
    union(
        cond("abduct")
            .mod("upper - extremity perpendicular to body"),
        obs("stand")
            .pol(NORMAL)
            .duration(
                eq(op(GT), temporal_unit(MINUTE))
            )
    )
)