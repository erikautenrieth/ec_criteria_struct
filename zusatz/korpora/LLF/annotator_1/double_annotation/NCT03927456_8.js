'EXC'

'2.  Clinically significant cardiovascular and cerebrovascular diseases , including but not limited to severe acute myocardial infarction within 6 months before enrollment , unstable or severe angina , Congestive heart failure ( New York heart association ( NYHA ) class > 2 ) , or ventricular arrhythmia which need medical intervention .'

'2.  Clinically severity(SEVERE) mod("cardiovascular") and mod("cerebrovascular") cond("diseases") , including but not limited to severity(SEVERE) cond("acute myocardial infarction") eq(op(LTEQ), val("6"), temporal_unit(MONTH)) before study , change() or severity(SEVERE) cond("angina") , cond("Congestive heart failure") ( clin_score("New York heart association") ( clin_score("NYHA") ) eq(unit("class"), op(GT), val("2")) , or cond("ventricular arrhythmia") which indication() medical proc("intervention") .'

cond("diseases")
    .severity(SEVERE)
    .mod("cardiovascular")
    .mod("cerebrovascular")
    .equiv(
        cond("acute myocardial infarction")
            .severity(SEVERE)
            .temporality(
                eq(op(LTEQ), val("6"), temporal_unit(MONTH))
            ),
        cond("angina")
            .change()
            .severity(SEVERE),
        cond("Congestive heart failure")
            .equiv(
                clin_score("New York heart association")
                    .equiv(
                        clin_score("NYHA")
                            .num_filter(
                                eq(unit("class"), op(GT), val("2"))
                            )
                    )
            ),
        indication(
            proc("intervention")
        )
            .for(
                cond("ventricular arrhythmia")
            )
    )