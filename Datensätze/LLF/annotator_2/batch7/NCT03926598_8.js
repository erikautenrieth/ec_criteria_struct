'EXC'

'-  Individuals that are using a care coordination tool other than GTG to translate ADA clinical standards of care for children with T 2D during the study period will be excluded from this study in order to avoid confounding factors .  Examples of care coordination tools include products that have the capabilities to send and receive electronic messages to the care team , receive and discuss care plans , and create and share health logs .'

'-  Individuals that are eq(temporal_per(PRESENT)) a proc("care coordination tool") except() proc("GTG") to translate ADA clinical standards of care for children with cond("T 2D") during the study period will be neg() from this study in order to avoid confounding factors .  Examples of care coordination tools include products that have the capabilities to send and receive electronic messages to the care team , receive and discuss care plans , and create and share health logs .'

neg(
    intersect(
        proc("care coordination tool")
            .temporality(
                eq(temporal_per(PRESENT))
            )
            .except(
                proc("GTG")
            ),
        cond("T 2D")
    )
)