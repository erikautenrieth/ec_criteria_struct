'INC'

'-  Tanner stage 2 based on breast development for girls , and pubic hair in boys .  Girls will have to be premenarcheal'

'-  cond("Tanner") eq(unit("stage"), val("2")) based on obs("breast development") for girl() , and obs("pubic hair") in boy() .  girl() will have to be cond("premenarcheal")'

cond("Tanner")
    .num_filter(
        eq(unit("stage"), val("2"))
    )
    .equiv(
        if_then(
            obs("breast development"),
            girl()
        ),
        if_then(
            obs("pubic hair"),
            boy()
        ),
        if_then(
            girl(),
            cond("premenarcheal")
        )
    )