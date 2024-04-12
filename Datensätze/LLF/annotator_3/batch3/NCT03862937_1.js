'INC'

'-  Be 60 or older , and in the case of women , they must be postmenopausal ( interruption of menstruation for more than one year ) .'

'-  Be eq(val("60"), op(GTEQ)) , and in the case of female() , they must be cond("postmenopausal") ( neg() of cond("menstruation") for eq(op(GT), val("one"), temporal_unit(YEAR)) ) .'

intersect(
    age()
        .eq(val("60"), op(GTEQ)),
    if_then(
        female(),
        cond("postmenopausal")
            .equiv(
                neg(
                    cond("menstruation")
                )
                    .duration(
                        eq(op(GT), val("one"), temporal_unit(YEAR))
                    )
            )
    )
)
