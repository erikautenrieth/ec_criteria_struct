'EXC'

'-  Acute or chronic bleeding , or erythrocyte transfusion , within the preceding 8 weeks .  change in Hb level ≥ 2 g / dL during screening phase ,'

'-  acute() or chronic() obs("bleeding") , or proc("erythrocyte transfusion") , eq(op(LTEQ), temporal_per(PAST), val("8"), temporal_unit(WEEK)) .  change() in lab("Hb") level eq(op(GTEQ), val("2"), unit("g"), unit("dL")) during screening phase ,'

intersect(
    union(
        obs("bleeding")
            .chronic()
            .acute(),
        proc("erythrocyte transfusion")
    )
        .temporality(
            eq(op(LTEQ), temporal_per(PAST), val("8"), temporal_unit(WEEK))
        ),
    lab("Hb")
        .num_filter(
            eq(op(GTEQ), val("2"), unit("g"), unit("dL"))
        )
        .change()
)