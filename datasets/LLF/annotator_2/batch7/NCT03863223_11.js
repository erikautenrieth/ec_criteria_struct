'EXC'

'5.  Pregnant or lactating women , or for women of childbearing potential unwilling to use a highly - effective contraception during of the study treatment and for at least 7 months after the last dose of study treatment .'

'5.  cond("Pregnant") or cond("lactating") female() , or for female() of cond("childbearing potential") unwilling to use a highly - effective contraception during of the study treatment and for at least 7 months after the last dose of study treatment.'

union(
    intersect(
        union(
            cond("Pregnant"),
            cond("lactating")
        ),
        female()
    ),
    intersect(
        female(),
        cond("childbearing potential")
    )
)