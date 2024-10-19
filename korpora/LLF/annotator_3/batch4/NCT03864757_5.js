'EXC'

'-  Any other significant disease or disorder which , in the opinion of the investigator , may either put the participant at risk because of participation in the clinical investigation may influence the result of the clinical investigation , or the participant\'s ability to participate in the clinical investigation'

'-  Any other severity(SEVERE) cond() or cond() which , in the opinion of the investigator , may either put the participant at risk() because of participation in the clinical investigation may influence the result of the clinical investigation , or the participant\'s ability to participate in the clinical investigation'

risk()
    .caused_by(
        union(
            cond(),
            cond()
        )
            .severity(SEVERE)
    )
