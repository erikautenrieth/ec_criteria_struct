'INC'

'-  And urinary analysis with leukocyturia > 10 / mm 3 , bacteriuria > 10 ^ 3 CFU / mL with ESBL producing enterobacteriaceae and resistance associated with fluoroquinolones ( FQ ) and cotrimoxazole ( CTX ) but sensitive to fosfomycin .'

'-  And lab("urinary analysis") with cond("leukocyturia") eq(op(GT), val("10"), unit("mm 3")) , cond("bacteriuria") eq(op(GT), val("10 ^ 3"), unit("CFU"), unit("mL")) with mod("ESBL producing") cond("enterobacteriaceae") and obs("resistance") associated with drug("fluoroquinolones") ( drug("FQ") ) and drug("cotrimoxazole") ( drug("CTX") ) but cond("sensitive") to drug("fosfomycin") .'

intersect(
    lab("urinary analysis"),
    cond("leukocyturia")
        .num_filter(
            eq(op(GT), val("10"), unit("mm 3"))
        ),
    cond("bacteriuria")
        .num_filter(
            eq(op(GT), val("10 ^ 3"), unit("CFU"), unit("mL"))
        ),
    cond("enterobacteriaceae")
        .mod("ESBL producing"),
    obs("resistance")
        .caused_by(
            union(
                drug("fluoroquinolones")
                    .equiv(
                        drug("FQ")
                    ),
                drug("cotrimoxazole")
                    .equiv(
                        drug("CTX")
                    )
            )
        ),
    cond("sensitive")
        .caused_by(
            drug("fosfomycin")
        )
)