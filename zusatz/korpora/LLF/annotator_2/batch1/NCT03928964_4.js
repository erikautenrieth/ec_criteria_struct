'INC'

'4.  With first - line treatment carried out between 2007 and June 2016 .'

'4.  With proc("first - line treatment") eq(temporal_per(PAST)) eq(op(BETWEEN), val("2007"), val("June 2016")) .'

proc("first - line treatment")
    .temporality(
        and(
            eq(temporal_per(PAST))),
            eq(op(BETWEEN), val("2007"), val("June 2016")
        )
    )