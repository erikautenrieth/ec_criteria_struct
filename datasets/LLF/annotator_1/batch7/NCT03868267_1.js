'INC'

'-  adult patients ( ≥ 18 years of age ) who are undergoing esophago - gastro duodenoscopy ( EGD ) for any reason and are consenting to be enrolled in the study during the study period .'

'-  adult() patients ( eq(op(GTEQ), val("18"), temporal_unit(YEAR)) of age() ) who are eq(temporal_per(PRESENT)) proc("esophago - gastro duodenoscopy") ( proc("EGD") ) for any reason and are consenting to be enrolled in the study during the study period .'

intersect(
    adult()
        .equiv(
            age()
                .num_filter(
                    eq(op(GTEQ), val("18"), temporal_unit(YEAR))
                )
        ),
    proc("esophago - gastro duodenoscopy")
        .temporality(
            eq(temporal_per(PRESENT))
        )
        .equiv(
            proc("EGD")
        )
)