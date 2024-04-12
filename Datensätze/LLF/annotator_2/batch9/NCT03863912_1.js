'INC'

'-  planned 6 cycles of chemotherapy with carboplatin / paclitaxel or carboplatin / pegylated liposomal doxorubicin'

'-  eq(temporal_per(FUTURE), val("6"), unit("cycles")) of proc("chemotherapy") with drug("carboplatin") / drug("paclitaxel") or drug("carboplatin") / drug("pegylated liposomal doxorubicin")'

intersect(
    proc("chemotherapy")
        .num_filter(
            eq(temporal_per(FUTURE), val("6"), unit("cycles"))
        ),
    union(
        drug("carboplatin"),
        drug("paclitaxel"),
        drug("carboplatin"),
        drug("pegylated liposomal doxorubicin")
    )
)