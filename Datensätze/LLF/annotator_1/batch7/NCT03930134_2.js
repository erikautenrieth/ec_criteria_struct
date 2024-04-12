'INC'

'-  Cicatricial uterus with contraindication to vaginal delivery ( uterus bi or multi - cicatricial , corporal uterine scar , intra - mural myomectomy , dystocic presentation )'

'-  cond("Cicatricial uterus") with contraindication() to proc("vaginal delivery") ( cond("uterus") mod("bi") or mod("multi - cicatricial") , cond("corporal uterine scar") , proc("intra - mural myomectomy") , cond("dystocic presentation") )'

intersect(
    cond("Cicatricial uterus"), 
    contraindication(
        proc("vaginal delivery")
    )
        .equiv(
            cond("uterus")
                .mod("bi")
                .mod("multi - cicatricial"),
            cond("corporal uterine scar"),
            proc("intra - mural myomectomy"),
            cond("dystocic presentation")
        )
)