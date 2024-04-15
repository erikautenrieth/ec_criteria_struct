'INC'

'-  All patients undergoing cesarean delivery with ruptured amniotic membranes .'

'-  All patients eq(temporal_per(PRESENT)) proc("cesarean delivery") with cond("ruptured amniotic membranes") .'

intersect(
    proc("cesarean delivery")
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    cond("ruptured amniotic membranes")
)