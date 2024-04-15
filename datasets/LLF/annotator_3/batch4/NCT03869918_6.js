'INC'

'6.  cognitively able to complete the study ( in opinion of the referring provider ) . Women currently on anti - cholinergic medication for urinary incontinence will be allowed if they meet the above criteria .'

'6.  obs("cognitively") able to complete the study ( in opinion of the referring provider ) . female() eq(temporal_per(PRESENT)) on drug("anti - cholinergic medication") for cond("urinary incontinence") will be allowed if they meet the above criteria .'

intersect(
    obs("cognitively"),
    if_then(
        female(),
        drug("anti - cholinergic medication")
            .temporality(
                eq(temporal_per(PRESENT))
            )
            .for(
                cond("urinary incontinence")
            )
    )
)
