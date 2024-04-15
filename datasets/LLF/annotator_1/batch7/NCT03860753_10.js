'EXC'

'-  contraindications for taking pioglitazone; medical conditions contraindicating pioglitazone pharmacotherapy or taking contraindicated medications'

'-  contraindication() for taking drug("pioglitazone") ; medical cond() contraindication() drug("pioglitazone") pharmacotherapy or taking contraindication() drug()'

union(
    contraindication(
        drug("pioglitazone")
    ),
    contraindication(
        drug("pioglitazone")
    )
        .caused_by(
            cond()
        )
)