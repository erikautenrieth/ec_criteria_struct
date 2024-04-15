'INC'

'2.  On ART for at least 6 months as per clinic records : the patient will have attended the clinic as shown in clinic records at least once since initiation AND will have re - filled their ART at least once since initiation as shown in clinic records . .'

'2.  eq(temporal_per(PRESENT)) proc("ART") for eq(op(GTEQ), val("6"), temporal_unit(MONTH)) as per clinic records : the patient will have enc() the clinic as shown in clinic records eq(op(GTEQ), val("once")) since eq(temporal_rec(FIRST_TIME)) AND will have re - filled their proc("ART") eq(op(GTEQ), val("once")) since initiation as shown in clinic records . .'

proc("ART")
    .temporality()(
        eq(temporal_per(PRESENT))
    )
    .duration(
        eq(op(GTEQ), val("6"), temporal_unit(MONTH))
    )
    .equiv(
        intersect(
            enc()
                .min_count(
                    eq(op(GTEQ), val("once"))
                )
                .temporality(
                    eq(temporal_rec(FIRST_TIME))
                ),
            proc("ART")
                .min_count(
                    eq(op(GTEQ), val("once"))
                )
        )
    )
