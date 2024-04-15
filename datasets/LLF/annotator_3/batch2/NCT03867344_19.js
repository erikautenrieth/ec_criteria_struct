'EXC'

'-  GAD - 73 Questionnaire for anxiety score ≥ 10'

'-  survey_or_questionnaire("GAD - 73 Questionnaire") for anxiety score eq(op(GTEQ), val("10"))'

survey_or_questionnaire("GAD - 73 Questionnaire")
    .num_filter(
        eq(op(GTEQ), val("10"))
    )