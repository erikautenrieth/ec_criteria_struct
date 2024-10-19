'EXC'

'-  Unstable medical condition as indicated by history , physical exam , and / or laboratory findings'

'-  change() cond() as indicated by history , proc("physical exam") , and / or lab("laboratory findings")'

cond()
    .change()
    .found_by(
        proc("physical exam"), 
        lab("laboratory findings")
    )