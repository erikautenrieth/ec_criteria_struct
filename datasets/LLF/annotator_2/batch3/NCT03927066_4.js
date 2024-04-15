'INC'

'-  Women will be either surgically sterilized or non - pregnant as determined by a urine pregnancy test'

'-  female() eq(temporal_per(FUTURE)) either proc("surgically sterilized") or neg() - cond("pregnant") as determined by a lab("urine pregnancy test")'

intersect(
    female(),
    union(
        proc("surgically sterilized"),
        neg(
            cond("pregnant")
        )
            .found_by(lab("urine pregnancy test"))
    )
)
    .temporality(
        eq(temporal_per(FUTURE))
    )