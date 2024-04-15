'INC'

'-  Non - smoking ( assessed by Health History Questionnaire )'

'-  neg() - obs("smoking") ( assessed by survey_or_questionnaire("Health History Questionnaire") )'

neg(
    obs("smoking")
)
    .found_by(
        survey_or_questionnaire("Health History Questionnaire")
    )