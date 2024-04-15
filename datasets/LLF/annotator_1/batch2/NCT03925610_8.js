'EXC'

'-  Chronic pain condition that was being treated with opioids .'

'-  chronic() cond("pain condition") that was eq(temporal_per(PAST)) treated with drug("opioids") .'

drug("opioids")    
    .for(
        cond("pain condition")
            .chronic()
            .temporality(
                eq(temporal_per(PAST))
            )
    )