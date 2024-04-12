'INC'

'3.  Platinum resistant ovarian cancer ( defined as relapsing within 6 months after the last administration of platinum - based chemotherapy ) OR platinum refractory ovarian cancer ( defined as progressing while on a platinum - based chemotherapy )'

'3.  mod("Platinum resistant") cond("ovarian cancer") ( defined as obs("relapsing") eq(op(LTEQ), val("6"), temporal_unit(MONTH)) after the eq(temporal_rec(MOST_RECENT_TIME)) administration of mod("platinum - based") proc("chemotherapy") ) OR mod("platinum refractory") cond("ovarian cancer") ( defined as obs("progressing") while on a mod("platinum - based") proc("chemotherapy") )'

union(
    cond("ovarian cancer")
        .mod("Platinum resistant")
        .equiv(
            seq(
                obs("relapsing"),
                after(
                    proc("chemotherapy")
                        .mod("platinum - based")
                        .temporality(
                            eq(temporal_rec(MOST_RECENT_TIME))
                        ),
                    eq(op(LTEQ), val("6"), temporal_unit(MONTH))
                )
            )
        ),
    cond("ovarian cancer")
        .mod("platinum refractory")
        .equiv(
            seq(
                obs("progressing"),
                during(
                    proc("chemotherapy")
                        .mod("platinum - based")
                )
            )
        )
)