'EXC'

'-  Complications during surgery , including posterior capsular rupture , vitreous loss , zonular dialysis , or iris trauma .'

'-  cond() during proc("surgery") , including mod("posterior") cond("capsular rupture") , cond("vitreous loss") , proc("zonular dialysis") , or mod("iris") obs("trauma") .'

seq(
    cond()
        .equiv(
            cond("capsular rupture")
                .mod("posterior"),
            cond("vitreous loss"),
            proc("zonular dialysis"),
            obs("trauma")
                .mod("iris")
        ),
    during(
        proc("surgery")
    )
)