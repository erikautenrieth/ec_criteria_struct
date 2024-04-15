'INC'

'-  Newly diagnosed obstructive sleep apnea indicated for positive airway pressure therapy , i . e .  Apnea - Hypopnea index AHI > 15'

'-  eq(temporal_rec(FIRST_TIME)) diagnosed cond("obstructive sleep apnea") indication() for pol(POSITIVE) proc("airway pressure therapy") , i . e .  clin_score("Apnea - Hypopnea index") obs("AHI") eq(op(GT), val("15"))'

indication(
    proc("airway pressure therapy")
        .pol(POSITIVE)
        .for(
            cond("obstructive sleep apnea")
                .temporality(
                    eq(temporal_rec(FIRST_TIME))
                )
        )
)
.equiv(
    obs("AHI")
        .num_filter(
            eq(op(GT), val("15")))
)