'EXC'

'-  patients with body mass index ( BMI ) > 35 kg / m 2 ,'

'-  patients with vital("body mass index") ( vital("BMI") ) eq(op(GT), val("35"), unit("kg"), unit("m 2")) ,'

vital("body mass index")
    .equiv(
        vital("BMI")
    )
    .num_filter(
        eq(op(GT), val("35"), unit("kg"), unit("m 2"))
    )