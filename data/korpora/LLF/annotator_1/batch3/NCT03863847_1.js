'INC'

'-  Patients suffering from chronic pain due to tennis elbow for at least 3 months'

'-  Patients suffering from chronic() obs("pain") due to cond("tennis elbow") for eq(op(GTEQ), val("3"), temporal_unit(MONTH))'

obs("pain")
    .chronic()
    .caused_by(
        cond("tennis elbow")
    )
    .duration(
        eq(op(GTEQ), val("3"), temporal_unit(MONTH))
    )   