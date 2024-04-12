'INC'

'-  Adults patients ≥ 18 years of age with CD with at least colonic involvement , UC , or non - IBD controls who have been referred for colonoscopy for clinical reasons .  The clinical reasons may include colorectal cancer screening , surveillance , diagnostic for CD or UC flare , or gastrointestinal symptoms .'

'-  adult() patients eq(op(GTEQ), val("18"), temporal_unit(YEAR)) of age() with cond("CD") with at least cond("colonic involvement") , cond("UC") , or neg() - cond("IBD") controls who have been eq(temporal_per(FUTURE)) proc("colonoscopy") for obs() .  The obs() may include proc("colorectal cancer screening") , obs("surveillance") , diagnostic for cond("CD") or cond("UC") flare , or cond("gastrointestinal") possible() .'

intersect(
    adult(),
    age()
        .num_filter(
            eq(op(GTEQ), val("18"), temporal_unit(YEAR))
        ),
    cond("CD"),
    union(
        cond("colonic involvement"),
        cond("UC"),
        intersect(
            neg(
                cond("IBD")
            ),
            proc("colonoscopy")
                .temporality(
                    eq(temporal_per(FUTURE))
                )
                .for(
                    obs()
                        .equiv(
                            proc("colorectal cancer screening"),
                            obs("surveillance")
                        )
                        .possible()
                        .for(
                            cond("CD"),
                            cond("UC"),
                            cond("gastrointestinal")
                        )
                )
        )
    )
)
