'INC'

'-  self - reporting moderate or higher pain on average during the last week ( > 3 on a 0 - 10 pain intensity numeric scale )'

'-  self - reporting severity(MODERATE) or severity(SEVERE) obs("pain") on average during the eq(temporal_per(PAST), temporal_unit(WEEK)) ( eq(op(GT), val("3")) on a mod("0 - 10") clin_score("pain intensity numeric scale") )'

seq(
    obs("pain")
        .severity(MODERATE)
        .severity(SEVERE)
        .equiv(
            clin_score("pain intensity numeric scale")
                .num_filter(
                    eq(op(GT), val("3"))
                )
                .mod("0 - 10")
        ),
    during(
        eq(temporal_per(PAST), temporal_unit(WEEK))
    )
)