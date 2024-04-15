'INC'

'-  Current service users , with severe and enduring mental disorder ,'

'-  eq(temporal_per(PRESENT)) enc() , with severity(SEVERE) and chronic() cond("mental disorder") ,'

intersect(
    enc()
        .temporality(
            eq(temporal_per(PRESENT))
        ), 
    cond("mental disorder")
        .severity(SEVERE)
        .chronic()
)