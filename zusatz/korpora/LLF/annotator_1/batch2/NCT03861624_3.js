'INC'

'3.  Wound primarily closeable ( no flap or delay in closure due to contamination needed )'

'3.  obs("Wound") mod("primarily closeable") ( neg() mod("flap") or mod("delay") in proc("closure") due to cond("contamination") indication() )'

intersect(
    obs("Wound")
        .mod("primarily closeable"),
    neg(
        indication(
            proc("closure")
                .mod("flap")
                .mod("delay")
                .caused_by(
                    cond("contamination")
                )
        )
    )
)