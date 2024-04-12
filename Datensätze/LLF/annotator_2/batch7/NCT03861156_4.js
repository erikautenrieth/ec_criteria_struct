'INC'

'-  patients must also have confirmation of tumour T 790 M mutation status ( confirmed positive ) after disease progression on the prior EGFR TKI .'

'-  patients must also have confirmation of cond("tumour T 790 M mutation") status ( confirmed pol(POSITIVE) ) after cond() on the eq(temporal_per(PAST)) drug("EGFR TKI") .'

seq(
    intersect(
        cond(),
        drug("EGFR TKI")
            .temporality(
                eq(temporal_per(PAST))
            )
    ),
    after(
        cond("tumour T 790 M mutation")
            .pol(POSITIVE)
    )
)