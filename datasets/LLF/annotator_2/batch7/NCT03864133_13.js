'EXC'

'-  Female patients who are pregnant , lactating or planning to become pregnant during the course of treatment .'

'-  female() patients who are cond("pregnant") , cond("lactating") or planning to become pregnant during the course of treatment.'

intersect(
    female(),
    union(
        cond("pregnant"),
        cond("lactating")
    )
)