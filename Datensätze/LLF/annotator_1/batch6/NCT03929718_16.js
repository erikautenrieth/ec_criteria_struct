'EXC'

'-  need for treatment with a class I or III AAD for another indication'

'-  indication() with a eq(unit("class"), val("I"), val("III")) drug("AAD") for other indication()'

indication(
    drug("AAD")
        .num_filter(
            eq(unit("class"), val("I"), val("III"))
        )
)