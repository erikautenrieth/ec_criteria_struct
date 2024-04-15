'INC'

'-  Have not participated in any systematic exercise program for at least six months prior to the start of this project .'

'-  Have neg() participated in any mod("systematic") proc("exercise program") for eq(op(GTEQ), val("six"), temporal_unit(MONTH)) prior to the start of this project .'

neg(
    proc("exercise program")
        .mod("systematic"),
        .temporality(
            eq(op(GTEQ), val("six"), temporal_unit(MONTH))
        )
)