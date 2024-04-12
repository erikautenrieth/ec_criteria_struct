'EXC'

'-  Intolerance or contraindications to the study drugs .'

'-  cond("Intolerance") or contraindication() to the study drug() .'

union(
    cond("Intolerance")
        .caused_by(
            drug()
        ),
    contraindication(
        drug()
    )
)
