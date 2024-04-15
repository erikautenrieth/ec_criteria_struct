'INC'

'-  Diagnosed with cutaneous invasive melanoma within HealthPartners system since 2010'

'-  Diagnosed with cond("cutaneous invasive melanoma") within loc(hosp("HealthPartners")) system eq(op(GTEQ), val("2010"))'

cond("cutaneous invasive melanoma")
    .loc(hosp("HealthPartners"))
    .temporality(
        eq(op(GTEQ), val("2010"))
    )