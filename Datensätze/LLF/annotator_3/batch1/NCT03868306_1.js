'INC'

'-  All patients with microcytic hypochromic anemia ( according to WHO , MCV less than 80 fl and HB level below the lower limit of normal value specified by age and gender .'

'-  All patients with cond("microcytic hypochromic anemia") ( according to WHO , lab("MCV") eq(op(LT), val("80"), unit("fl")) and lab("HB") level eq(op(LT), unit(REF_RANGE_NORMAL)) specified by age and gender .'

cond("microcytic hypochromic anemia")
    .equiv(
        intersect(
            lab("MCV")
                .num_filter(
                    eq(op(LT), val("80"), unit("fl"))
                ),
            lab("HB")
                .num_filter(
                    eq(op(LT), unit(REF_RANGE_NORMAL))
                )
        )
    )