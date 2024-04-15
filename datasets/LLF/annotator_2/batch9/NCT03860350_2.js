'INC'

'-  Framingham risk score ( 10 % or above )'

'-  clin_score("Framingham risk score") ( eq(val("10"), unit("%"), op(GTEQ)) )'

clin_score("Framingham risk score")
    .num_filter(
        eq(val("10"), unit("%"), op(GTEQ))
    )
