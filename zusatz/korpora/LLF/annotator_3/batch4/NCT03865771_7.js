'INC'

'-  focal age related epilepsy : BECTS , ABPE , ECSWS ( ILAE criteria )'

'-  mod("focal age related") cond("epilepsy") : cond("BECTS") , cond("ABPE") , cond("ECSWS") ( ILAE criteria )'

cond("epilepsy")
    .mod("focal age related")
    .equiv(
        cond("BECTS"),
        cond("ABPE"),
        cond("ECSWS")
    )

