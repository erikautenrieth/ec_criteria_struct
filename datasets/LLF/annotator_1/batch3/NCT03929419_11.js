'EXC'

'-  Cardiovascular disease , such as manifest coronary Heart disease , heart failure greater than NYHA 2 , recent myocardial infarction'

'-  cond("Cardiovascular disease") , such as manifest cond("coronary Heart disease") , cond("heart failure") eq(op(GT), val("2")) clin_score("NYHA") 2 , eq(temporal_per(RECENT)) cond("myocardial infarction")'

cond("Cardiovascular disease")
    .equiv(
        cond("coronary Heart disease"), 
        cond("heart failure")
            .equiv(
                clin_score("NYHA")
                    .num_filter(
                        eq(op(GT), val("2"))
                    )
                ),
        cond("myocardial infarction")
            .temporality(
                eq(temporal_per(RECENT))
            )
    )
        