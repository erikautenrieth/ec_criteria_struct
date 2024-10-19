'EXC'

'-  severe OHSS in a previous stimulation cycle or any contraindication for the use of gonadotrophins .'

'-  severity(SEVERE) cond("OHSS") in a eq(temporal_per(PAST)) proc("stimulation cycle") or any contraindication() for the use of drug("gonadotrophins") .'

union(
    seq(
        cond("OHSS")
            .severity(SEVERE),
        during(
            proc("stimulation cycle")
                .temporality(
                    eq(temporal_per(PAST))
                )
        )
    ),
    contraindication(
        drug("gonadotrophins")
    )
)