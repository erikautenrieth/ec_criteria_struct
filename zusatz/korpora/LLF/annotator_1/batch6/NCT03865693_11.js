'EXC'

'-  contraindication for MRI , or pregnancy .'

'-  contraindication() for proc("MRI") , or cond("pregnancy") .'

union(
    contraindication(
        proc("MRI")
    ),
    cond("pregnancy")
)