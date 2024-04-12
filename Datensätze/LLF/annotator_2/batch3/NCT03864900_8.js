'EXC'

'3.  diagnosed with the New York Heart Association ( NYHA ) grade VI heart failure'

'3.  diagnosed with the clin_score("New York Heart Association") ( clin_score("NYHA") ) eq(unit("grade"), val("VI")) cond("heart failure")'

intersect(
    clin_score("New York Heart Association")
        .equiv(
            clin_score("NYHA")
        )
        .num_filter(
            eq(unit("grade"), val("VI"))
        ),
    cond("heart failure")
)