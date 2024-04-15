'INC'

'-  children underoing elective surgery under general anaesthsia'

'-  child() eq(temporal_per(PRESENT)) elective proc("surgery") under proc("general anaesthsia")'

intersect(
    child(), 
    seq(
        proc("surgery")
            .temporality(
                eq(temporal_per(PRESENT))
            ),
        during(
            proc("general anaesthsia")
        )
    )
)