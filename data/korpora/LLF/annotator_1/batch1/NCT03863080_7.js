'EXC'

'2.  Immunoglobulins given by SC , IV ( IVIG ) , or intramuscular route , or plasmapheresis / plasma exchange ( PE ) within 4 weeks before Screening .'

'2.  drug("Immunoglobulins") given by mod("SC") , mod("IV") ( mod("IVIG") ) , or mod("intramuscular route") , or proc("plasmapheresis") / proc("plasma exchange") ( proc("PE") ) eq(op(LTEQ), val("4"), temporal_unit(WEEK)) before Screening .'

union(
    drug("Immunoglobulins")
        .mod("SC")
        .mod("IV")
        .mod("IVIG")
        .mod("intramuscular route"),
    proc("plasmapheresis"),
    proc("plasma exchange")
        .equiv(
            proc("PE")
        )
)
.temporality(
    eq(op(LTEQ), val("4"), temporal_unit(WEEK))
)