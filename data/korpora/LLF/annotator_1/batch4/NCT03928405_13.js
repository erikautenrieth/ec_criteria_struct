'EXC'

'-  Those with protective sensation loss ( those with Semmes - Weinstein Monofilament Thickness 4.56 and above )'

'-  Those with cond("protective sensation loss") ( those with measurement("Semmes - Weinstein Monofilament Thickness") eq(val("4.56"), op(GTEQ)) )'

cond("protective sensation loss")
    .equiv(
        measurement("Semmes - Weinstein Monofilament Thickness")
            .num_filter(
                eq(val("4.56"), op(GTEQ))
            )
    )