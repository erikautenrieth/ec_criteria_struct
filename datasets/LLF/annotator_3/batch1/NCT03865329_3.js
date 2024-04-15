'EXC'

'-  Inability to walk ( orthopedic - neurologic problems or confined to bed )'

'-  cond("Inability to walk") ( mod("orthopedic") - mod("neurologic") cond("problems") or cond("confined to bed") )'

cond("Inability to walk")
    .equiv(
        union(
            cond("problems")
                .mod("orthopedic")
                .mod("neurologic"),
            cond("confined to bed")
        )
)
