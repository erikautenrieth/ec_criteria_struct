'INC'

'2.  Relapsed disease will be defined as 5 % or more blasts in bone marrow seen after remission .'

'2.  cond("Relapsed disease") will be defined as eq(val("5"), unit("%"), op(GTEQ)) lab("blasts in bone marrow") seen after cond("remission") .'

cond("Relapsed disease")
    .equiv(
        seq(
            lab("blasts in bone marrow")
                .num_filter(
                    eq(val("5"), unit("%"), op(GTEQ))
                ),
            after(
                cond("remission")
            )
        )
    )