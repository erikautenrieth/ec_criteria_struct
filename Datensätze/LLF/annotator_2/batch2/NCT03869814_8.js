'EXC'

'3.  Any surgery , i . e . , invasive procedure performed in the operating room with any level of anesthesia , within prior month .'

'3.  Any proc("surgery") , i . e . , proc("invasive procedure") performed in the operating room with any level of proc("anesthesia") , eq(temporal_per(PAST), temporal_unit(MONTH)) .'

intersect(
    proc("surgery")
        .equiv(
            proc("invasive procedure")
        ),
    proc("anesthesia")
)
    .temporality(
        eq(temporal_per(PAST), temporal_unit(MONTH))
    )