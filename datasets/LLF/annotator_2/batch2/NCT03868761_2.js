'INC'

'2.  Screen positive for PTSD ( Child Trauma Screening Questionnaire = 5 or higher )'

'2.  Screen pol(POSITIVE) for cond("PTSD") ( survey_or_questionnaire("Child Trauma Screening Questionnaire") eq(op(EQ), val("5"), op(GTEQ)) )'

cond("PTSD")
    .pol(POSITIVE)
    .equiv(
        survey_or_questionnaire("Child Trauma Screening Questionnaire")
            .num_filter(
                eq(op(EQ), val("5"), op(GTEQ))
            )
    )