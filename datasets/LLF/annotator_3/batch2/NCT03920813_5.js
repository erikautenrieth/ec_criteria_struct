'EXC'

'-  Patients with high - risk ALL ( presence of higher - risk features : MRD ≥ 1 % at 46 day , or age < 6 month and white blood cell ( WBC ) count ≥ 300 x 109 / L with translocations t ( 9 ; 22 ) ( q 34 ; q 11 ) [ BCR - ABL ] , t ( 4 ; 11 ) ( q 21 ;q 23 ) [ AF 4 / MLL ] , t ( 1 ; 19 ) ( q 23 ; p 13 ) [ E 2A - PBX 1 ] or other MLL - rearrangements ) were removed'

'-  Patients with pol(HIGH) - risk() cond("ALL") ( presence of higher - risk features : obs("MRD") eq(op(GTEQ), val("1"), unit("%")) at 46 day , or age() eq(op(LT), val("6"), temporal_unit(MONTH)) and lab("white blood cell") ( lab("WBC") ) eq(op(GTEQ), val("300"), unit("x 109"), unit("L")) with translocations t ( 9 ; 22 ) ( q 34 ; q 11 ) [ BCR - ABL ] , t ( 4 ; 11 ) ( q 21 ;q 23 ) [ AF 4 / MLL ] , t ( 1 ; 19 ) ( q 23 ; p 13 ) [ E 2A - PBX 1 ] or other MLL - rearrangements ) were removed'

risk(
    cond("ALL")
)
    .pol(HIGH)
    .equiv(
        obs("MRD")
            .num_filter(
                eq(op(GTEQ), val("1"), unit("%"))
            ),
        intersect(
            age()
                .num_filter(
                    eq(op(LT), val("6"), temporal_unit(MONTH))
                ),
            lab("white blood cell")
                .equiv(
                    lab("WBC")
                )
                .num_filter(
                    eq(op(GTEQ), val("300"), unit("x 109"), unit("L"))
                )
        )
    )



