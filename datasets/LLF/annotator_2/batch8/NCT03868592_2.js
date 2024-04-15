'INC'

'-  Mo active physical illness that would interfere with mobility or weight loss after bariatric surgery'

'-  Mo eq(temporal_per(PRESENT)) cond("physical illness") that would change() with cond("mobility") or obs("weight loss") after proc("bariatric surgery")'

seq(
    union(
        cond("mobility"),
        obs("weight loss")
    )
        .caused_by(
            cond("physical illness")
                .temporality(
                    eq(temporal_per(PRESENT))
                )
        ),
    after(
        proc("bariatric surgery")
    )
)