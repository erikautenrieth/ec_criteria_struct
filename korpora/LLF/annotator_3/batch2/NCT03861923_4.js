'INC'

'-  Glenohumeral passive range of motion decreases as the humerus is abducted from 45 degrees to 90 degrees'

'-  measurement("Glenohumeral passive range of motion") pol(LOW) as the mod("humerus") is obs("abducted") from eq(val("45"), unit("degrees"), op(BETWEEN), val("90"), unit("degrees"))'

intersect(
    measurement("Glenohumeral passive range of motion")
        .pol(LOW),
    obs("abducted")
        .mod("humerus")
        .num_filter(
            eq(val("45"), unit("degrees"), op(BETWEEN), val("90"), unit("degrees"))
        )
)
