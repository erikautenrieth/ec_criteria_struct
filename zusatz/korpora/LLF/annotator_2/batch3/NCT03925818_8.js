'EXC'

'-  Use of anti - secretory drugs , antibiotics or probiotics 4 weeks preceding the enrollment .'

'-  Use of drug("anti - secretory drugs") , drug("antibiotics") or drug("probiotics") eq(val("4"), temporal_unit(WEEK)) preceding the enrollment .'

union(
    drug("anti - secretory drugs"),
    drug("antibiotics"),
    drug("probiotics") 
)
    .duration(
        eq(val("4"), temporal_unit(WEEK))
    )