'EXC'

'-  Metallic implants , claustrophobia not amenable to medication , or known contraindications to undergoing MR scanning'

'-  proc("Metallic implants") , cond("claustrophobia") not amenable to medication , or known contraindication() to undergoing proc("MR scanning")'

union(
    proc("Metallic implants"),
    cond("claustrophobia"),
    contraindication(
        proc("MR scanning")
    )
)