'EXC'

'-  bacteremia related to a peripheral or central catheter'

'-  cond("bacteremia") related to a mod("peripheral") or mod("central") proc("catheter")'

proc("catheter")
    .mod("peripheral")
    .mod("central")
    .caused_by(
        cond("bacteremia")
    )