'INC'

'Nursing home residents with ≥ 2 of the following risk factors for atrial fibrillation : age ≥ 75 years ; female sex ; obstructive sleep apnea ; peripheral vascular disease ; diabetes mellitus ; obesity ( body mass index [ BMI ] > 30 kg / m2 ) ; hypertension ; congestive heart failure'

'Nursing home residents with eq(op(GTEQ), val("2")) criteria() risk() for cond("atrial fibrillation") : age() eq(op(GTEQ), val("75"), temporal_unit(YEAR)) ; female() sex ; cond("obstructive sleep apnea") ; cond("peripheral vascular disease") ; cond("diabetes mellitus") ; cond("obesity") ( vital("body mass index") [ vital("BMI") ] eq(op(GT), val("30"), unit("kg"), per("m2")) ) ; cond("hypertension") ; cond("congestive heart failure")'

risk(
    cond("atrial fibrillation")
)
    .equiv(
        criteria(
            age()
                .num_filter(
                    eq(op(GTEQ), val("75"), temporal_unit(YEAR))
                ),
            female(),
            cond("obstructive sleep apnea"),
            cond("peripheral vascular disease"),
            cond("diabetes mellitus"),
            cond("obesity")
                .equiv(
                    vital("body mass index")
                        .equiv(
                            vital("BMI")
                        )
                        .num_filter(
                            eq(op(GT), val("30"), unit("kg"), per("m2"))
                        )
                ),
            cond("hypertension"),
            cond("congestive heart failure")
        )
            .min_count(
                eq(op(GTEQ), val("2"))
            )
    )

