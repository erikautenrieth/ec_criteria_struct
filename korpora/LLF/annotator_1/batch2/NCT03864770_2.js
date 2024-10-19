'INC'

'2.  Patients with MTrPs on gastrocnemius ( According to the diagnostic criteria proposed by Simons & Travell )'

'2.  Patients with cond("MTrPs") eq(temporal_per(PRESENT)) drug("gastrocnemius") ( According to the diagnostic criteria proposed by Simons & Travell )'

intersect(
    cond("MTrPs"),
    drug("gastrocnemius")
        .temporality(
            eq(temporal_per(PRESENT))
        )
)
