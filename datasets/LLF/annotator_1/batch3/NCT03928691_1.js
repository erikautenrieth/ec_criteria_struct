'INC'

'pregnant women 34 weeks or less admitted to Women\'s Health Hospital with a diagnosis of :'

'cond("pregnant") female() eq(val("34"), temporal_unit(WEEK), op(LTEQ)) enc(INPATIENT) to loc(hosp("Womens Health Hospital")) with a diagnosis of :'

intersect(
    cond("pregnant")
        .duration(
            eq(val("34"), temporal_unit(WEEK), op(LTEQ))
        ), 
    female(), 
    enc(INPATIENT)
        .loc(hosp("Women's Health Hospital"))
)