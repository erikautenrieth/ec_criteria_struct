'EXC'

'-  Uncooperative or behaviorally unsuited ( assessed during a TB prophylaxis at the initial baseline study visit ) .'

'-  cond("Uncooperative") or cond("behaviorally unsuited") ( assessed during a proc("TB prophylaxis") at the eq(temporal_rec(FIRST_TIME)) study visit ) .'

seq(
    union(
        cond("Uncooperative"),
        cond("behaviorally unsuited")
    ),
    during(
        proc("TB prophylaxis")
            .temporality(
                eq(temporal_rec(FIRST_TIME))
            )
    )
)