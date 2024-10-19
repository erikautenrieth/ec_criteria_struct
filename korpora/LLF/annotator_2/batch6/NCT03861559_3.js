'INC'

'-  Is in good health and free of any unstable , clinically - significant disease , other than allergic rhinitis , that would interfere with the study schedule or evaluation of seasonal allergic rhinitis'

'-  Is in cond("good health") and neg() any change() , clinically - severity(SEVERE) cond() , except() cond("allergic rhinitis") , that would interfere with the study schedule or evaluation of seasonal allergic rhinitis'

intersect(
    cond("good health"),
    neg(
        cond()
            .change()
            .severity(SEVERE)
            .except(
                cond("allergic rhinitis")
            )
    )
)