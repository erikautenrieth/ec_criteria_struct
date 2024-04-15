'EXC'

'( 5 ) patients with physical and mental dis - abilities that interfere with the maintenance of implants .'

'( 5 ) patients with mod("physical") and mod("mental") cond("dis - abilities") that change() with the maintenance of proc("implants") .'

intersect(
    cond("dis - abilities")
        .mod("physical")
        .mod("mental"),
    proc("implants")
        .change()
)
