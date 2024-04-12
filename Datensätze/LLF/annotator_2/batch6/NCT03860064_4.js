'INC'

'-  Normal uterus and ovaries at transvaginal ultrasound'

'-  pol(NORMAL) cond("uterus") and cond("ovaries") at proc("transvaginal ultrasound")'

intersect(
    cond("uterus")
        .pol(NORMAL),
    intersect(
        cond("ovaries"),
        proc("transvaginal ultrasound")
    )
)