'INC'

'-  Participant self - identifies as transgender and / or has a current gender identity which differs from gender assigned at birth ( includes all gender diverse people )'

'-  Participant self - identifies as transgender() and / or has a eq(temporal_per(PRESENT)) obs("gender identity") which differs from obs("gender") assigned at birth() ( includes all gender diverse people )'

intersect(
    transgender(),
    obs("gender identity")
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    seq(
        obs("gender"),
        during(
            birth()
        )
    )
)