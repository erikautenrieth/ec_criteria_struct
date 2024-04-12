'EXC'

'-  These include cystic fibrosis , congenital or acquired immunodeficiency , congenital heart disease , bronchopulmonary dysplasia , pulmonary infection , primary ciliary dyskinesia presenting with newborn respiratory distress and recurrent aspiration .'

'-  These include cond("cystic fibrosis") , mod("congenital") or mod("acquired") cond("immunodeficiency") , cond("congenital heart disease") , cond("bronchopulmonary dysplasia") , cond("pulmonary infection") , mod("primary") cond("ciliary dyskinesia") type(ADMITTING) with cond("newborn respiratory distress") and mod("recurrent") cond("aspiration") .'

union(
    cond("cystic fibrosis"), 
    cond("immunodeficiency")
        .mod("congenital")
        .mod("acquired"),
    cond("congenital heart disease"), 
    cond("bronchopulmonary dysplasia"), 
    cond("pulmonary infection"), 
    intersect(
        cond("ciliary dyskinesia")
            .mod("primary")
            .type(ADMITTING),
        cond("newborn respiratory distress"),
        cond("aspiration")
            .mod("recurrent")
    )
)
    