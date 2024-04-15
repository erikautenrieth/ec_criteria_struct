'EXC'

'-  Any periodontal or Antibiotic treatment during the last six months .'

'-  Any proc("periodontal") or drug("Antibiotic") proc() during the eq(temporal_per(PAST), val("six"), temporal_unit(MONTH)) .'

proc()
    .equiv(
        union(
            proc("periodontal"),
            drug("Antibiotic")
        )
    )
    .temporality(
        eq(temporal_per(PAST), val("six"), temporal_unit(MONTH))
    )