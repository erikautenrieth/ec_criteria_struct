'EXC'

'2.  Patient is incarcerated , incapacitated , or otherwise unable to provide appropriate informed consent'

'2.  Patient is obs("incarcerated") , cond("incapacitated") , or otherwise unable to provide appropriate informed consent'

union(
    obs("incarcerated"),
    cond("incapacitated")
)