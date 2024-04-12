'EXC'

'-  women with pacemaker or other implants where electrosurgery is to be avoided'

'-  female() with proc("pacemaker") or other proc("implants") where proc("electrosurgery") is contraindication()'

intersect(
    female(), 
    contraindication(
        proc("electrosurgery")
    )
        .equiv(
            proc("pacemaker"),
            proc("implants")
        )
)