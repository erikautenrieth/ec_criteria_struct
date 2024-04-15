'INC'

'-  Patient with Phenylalaninemia ≥ 900 μmol / L on blotter made during the screening period ( or average blotting results ≥ 900 μmol / L if several blots made during the screening period )'

'-  Patient with obs("Phenylalaninemia") eq(op(GTEQ), val("900"), unit("μmol"), unit("L")) on blotter made during the screening period ( or average lab("blotting results") eq(op(GTEQ), val("900"), unit("μmol"), unit("L")) if eq(op(GT)) lab("blots") made during the screening period )'

union(
    obs("Phenylalaninemia")
        .num_filter(
            eq(op(GTEQ), val("900"), unit("μmol"), unit("L"))
        ),
    if_then(
        lab("blots")
            .num_filter(
                eq(op(GT))
            ),
        lab("blotting results")
            .num_filter(
                eq(op(GTEQ), val("900"), unit("μmol"), unit("L"))
            )
    )
)