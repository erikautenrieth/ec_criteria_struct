'EXC'

'-  Known history of the following pulmonary comorbidities : severe chronic obstructive pulmonary disease ( COPD ) defined as FEV 1 ≤ 50 % , emphysema , interstitial lung disease , and / or use of supplemental oxygen .'

'-  Known eq(temporal_per(PAST)) of the following mod("pulmonary") cond("comorbidities") : severity(SEVERE) chronic() cond("obstructive pulmonary disease") ( cond("COPD") ) defined as lab("FEV 1") eq(op(LTEQ), val("50"), unit("%")) , cond("emphysema") , cond("interstitial lung disease") , and / or use of proc("supplemental oxygen") .'

cond("comorbidities")
    .temporality(
        eq(temporal_per(PAST))
    )
    .mod("pulmonary")
    .equiv(
        intersect(
            cond("obstructive pulmonary disease")
                .severity(SEVERE)
                .chronic()
                .equiv(
                    cond("COPD")
                ),
            lab("FEV 1")
                .num_filter(
                    eq(op(LTEQ), val("50"), unit("%"))
                )
        ),
        cond("emphysema"),
        cond("interstitial lung disease"),
        proc("supplemental oxygen")
    )