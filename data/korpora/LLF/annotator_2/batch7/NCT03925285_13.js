'EXC'

'-  Pregnant or lactating women .  Documentation of a negative pregnancy test must be available for women of childbearing potential .  Woman of childbearing potential are premenopausal women with intact reproductive organs and women less than two years after menopause ;'

'-  cond("Pregnant") or cond("lactating") female() .  Documentation of a pol(NEGATIVE) lab("pregnancy test") must be available for female() of cond("childbearing potential") .  female() of cond("childbearing potential") are cond("premenopausal") female() with cond("intact reproductive organs") and female() eq(op(LT), val("two"), temporal_unit(YEAR)) after cond("menopause") ;'

intersect(
    intersect(
        union(
            cond("Pregnant"),
            cond("lactating")
        ),
        female()
    ),
    if_then(
        intersect(
            female(),
            cond("childbearing potential")
                .equiv(
                    intersect(
                        cond("premenopausal"),
                        female(),
                        cond("intact reproductive organs")
                    ),
                    intersect(
                        female(),
                        cond("menopause")
                            .duration(
                                eq(op(LT), val("two"), temporal_unit(YEAR))
                            )
                    )
                )
        ),
        lab("pregnancy test")
            .pol(NEGATIVE)
    )
)