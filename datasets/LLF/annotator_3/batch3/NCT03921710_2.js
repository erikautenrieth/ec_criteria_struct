'INC'

'-  PCOS patients with polycystic ovarian morphology : at least 25 follicles ( 2 - 9 mm ) throughout the whole ovary and / or increased ovarian volume ( > 10 ml ) ( it is sufficient that 1 ovary fits these criteria )'

'-  cond("PCOS") patients with cond("polycystic ovarian morphology") : eq(op(GTEQ), val("25")) obs("follicles") ( eq(val("2"), op(BETWEEN), val("9"), unit("mm")) ) throughout the mod("whole ovary") and / or pol(HIGH) measurement("ovarian volume") ( eq(op(GT), val("10"), unit("ml")) ) ( it is sufficient that 1 ovary fits these criteria )'

intersect(
    cond("PCOS"),
    cond("polycystic ovarian morphology")
)
    .equiv(
        union(
            obs("follicles")
                .num_filter(
                    eq(op(GTEQ), val("25"))
                        .equiv(
                            eq(val("2"), op(BETWEEN), val("9"), unit("mm"))
                        )
                )
                .mod("whole ovary"),
            measurement("ovarian volume")
                .pol(HIGH)
                .num_filter(
                    eq(op(GT), val("10"), unit("ml"))
                )
        )
    )

