'EXC'

'-  Known lactate deficiency or any other problem absorbing lactose , galactose or glucose'

'-  Known cond("lactate deficiency") or any other cond("problem absorbing") mod("lactose") , mod("galactose") or mod("glucose")'


union(
    cond("lactate deficiency"),
    cond("problem absorbing")
        .mod("lactose")
        .mod("galactose")
        .mod("glucose")
)
