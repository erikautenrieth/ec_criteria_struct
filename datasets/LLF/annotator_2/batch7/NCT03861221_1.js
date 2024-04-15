'INC'

'-  Female , older than 35 years .  Already have mammography , or other standard exams ( ultrasound , MRI , etc ) .  Could participate this trial within 2 weeks after mammography .  Have the ability of consent inform .'

'-  female() , eq(op(GT), val("35"), temporal_per(YEAR)) .  eq(temporal_per(PAST)) have proc("mammography") , or other proc("standard exams") ( proc("ultrasound") , proc("MRI") , etc ) .  Could participate this trial within 2 weeks after mammography .  Have the ability of consent inform .'

intersect(
    female(),
    age()
        .num_filter(
            eq(op(GT), val("35"), temporal_per(YEAR))
        ),
    union(
        proc("mammography")
            .temporality(
                eq(temporal_per(PAST))
            ),
        proc("standard exams")
            .equiv(
                proc("ultrasound"),
                proc("MRI")
            )
    )
)