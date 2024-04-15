'EXC'

'-  Contraindication to gadolinium injection ( allergy , renal failure with DFG < 30 ml / min / 1.73 m² )'

'-  contraindication() to drug("gadolinium injection")( allergy() , cond("renal failure") with obs("DFG") eq(op(LT), val("30"), unit("ml"), per(MINUTE), unit("1.73 m²")) )'

contraindication(
    drug("gadolinium injection")
)
.equiv(
    allergy(
        drug("gadolinium injection")
    ),
    intersect(
        cond("renal failure"),
        obs("DFG")
            .num_filter(
                eq(op(LT), val("30"), unit("ml"), per(MINUTE), unit("1.73 m²"))
            )
    )
)