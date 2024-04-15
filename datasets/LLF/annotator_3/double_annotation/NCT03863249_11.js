'EXC'

'4.  Routine use of oral antiseptics and / or during the previous 3 months .'

'4.  Routine use of drug("oral antiseptics") and / or during the eq(temporal_per(PAST), val("3"), temporal_unit(MONTH)) .'


drug("oral antiseptics")
    .num_filter(eq(temporal_per(PAST), val("3"), temporal_unit(MONTH)))
