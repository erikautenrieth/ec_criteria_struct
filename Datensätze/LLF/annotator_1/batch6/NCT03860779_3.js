'INC'

'-  Indication for colonoscopy with propofol sedation'

'-  indication() for proc("colonoscopy") with drug("propofol") proc("sedation")'

indication(
    seq(
        proc("colonoscopy"),
        during(
            union(
                drug("propofol"),
                proc("sedation")
            )
        )
    )
)
