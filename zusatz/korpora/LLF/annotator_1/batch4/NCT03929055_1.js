'INC'

'-  patient with acute() respiratory failure , not intubated , who require non invasive mechanical ventilation'

'-  patient with acute() cond("respiratory failure") , neg() proc("intubated") , who require non invasive mechanical ventilation'

intersect(
    cond("respiratory failure")
        .acute(),
    neg(
        proc("intubated")
    )
)