'INC'

'-  For the volunteers with venous insuffiency : clearly visual venous insufficiency ( CEAP 1 and 2 )'

'-  For the volunteers with cond("venous insuffiency") : mod("clearly visual") cond("venous insufficiency") ( cond("CEAP") eq(val("1"), val("2")) )'

cond("venous insuffiency")
    .equiv(
        cond("venous insufficiency")
            .mod("clearly visual")
            .equiv(
                cond("CEAP")
                    .num_filter(
                        eq(val("1"), val("2"))
                    )
            )
    )