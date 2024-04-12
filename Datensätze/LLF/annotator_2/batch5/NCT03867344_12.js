'EXC'

'-  In all subjects , any individuals on oral , injected , inhaled or topical corticosteroids within the last year or oral contraceptives within the past 3 months will be excluded .'

'-  In all subjects , any individuals on mod("oral") , mod("injected") , mod("inhaled") or mod("topical") drug("corticosteroids") eq(temporal_per(PAST), temporal_unit(YEAR)) or oral drug("contraceptives") eq(op(LTEQ), temporal_per(PAST), val("3"), temporal_unit(MONTH)) will be neg() .'

neg(
    union(
        drug("corticosteroids")
            .mod("oral")
            .mod("injected")
            .mod("inhaled")
            .mod("topical")
            .temporality(
                eq(temporal_per(PAST), temporal_unit(YEAR))
            ),
        drug("contraceptives")
            .temporality(
                eq(op(LTEQ), temporal_per(PAST), val("3"), temporal_unit(MONTH))
            )
    )
)