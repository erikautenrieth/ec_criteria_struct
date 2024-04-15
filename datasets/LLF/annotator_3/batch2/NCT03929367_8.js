'EXC'

'-  Any disease , diagnosis , or condition ( medical or surgical ) that , in the opinion of the Principal Investigator , would place the subject at increased risk ( active gynecologic disease in which increased tone would be detrimental e . g . , uterine fibroids with ongoing bleeding ) , compromise the subject\'s compliance with study procedures , or compromise the quality of the data'

'-  Any cond() , cond() , or cond() ( mod("medical") or mod("surgical") ) that , in the opinion of the Principal Investigator , would place the subject at pol(HIGH) risk() ( eq(temporal_per(PRESENT)) cond("gynecologic disease") in which increased tone would be detrimental e . g . , cond("uterine fibroids") with ongoing obs("bleeding") ) , compromise the subject\'s compliance with study procedures , or compromise the quality of the data'

risk()
    .pol(HIGH)
    .caused_by(
        union(
            cond(),
            cond(),
            cond()
        )
            .mod("medical")
            .mod("surgical")
            .equiv(
                cond("gynecologic disease")
                    .temporality(
                        eq(temporal_per(PRESENT))
                    )
                    .equiv(
                        intersect(
                            cond("uterine fibroids"),
                            obs("bleeding")
                        )
                    )
            )
    )
