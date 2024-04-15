'INC'

'-  CDC - defined CRE isolated during hospitalization or outpatient visit'

'-  CDC - defined org("CRE isolated") during enc(INPATIENT) or enc(OUTPATIENT)'

seq(
    org("CRE isolated"),
    during(
        union(
            enc(INPATIENT),
            enc(OUTPATIENT)
        )
    )
)
