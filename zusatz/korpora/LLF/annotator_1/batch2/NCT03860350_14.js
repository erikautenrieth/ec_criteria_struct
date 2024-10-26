'EXC'

'-  Heart failure NYHA class III or IV ,'

'-  cond("Heart failure") clin_score("NYHA") class eq(val("III"), val("IV")) ,'

union(
    cond("Heart failure"),
    clin_score("NYHA")
        .num_filter(
            eq(val("III"), val("IV"))
        )
)