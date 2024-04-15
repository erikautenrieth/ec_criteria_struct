'EXC'

'-  administration of prebiotics / probiotics / symbiotic / systemic immunomodulators during the 4 weeks before enrolment ,'

'-  administration of drug("prebiotics") / drug("probiotics") / mod("symbiotic") / mod("systemic") drug("immunomodulators") during the eq(val("4"), temporal_unit(WEEK)) before enrolment ,'

union(
    drug("prebiotics"),
    drug("probiotics"),
    drug("immunomodulators")
        .mod("symbiotic")
        .mod("systemic")
)
.temporality(
    eq(val("4"), temporal_unit(WEEK))
)