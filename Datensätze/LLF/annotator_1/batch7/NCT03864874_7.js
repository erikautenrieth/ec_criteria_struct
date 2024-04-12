'EXC'

'-  Incomplete lung exclusion during surgical procedure .'

'-  mod("Incomplete") cond("lung exclusion") during proc("surgical procedure") .'

seq(
    cond("lung exclusion")
        .mod("Incomplete"),
    during(
        proc("surgical procedure")
    )
)