'INC'

'-  Eye treated with XEN 45 Gel Stent for primary open angle glaucoma as a standalone procedure or in combination with phacoemulsification'

'-  mod("Eye") proc() with mod("XEN 45") proc("Gel Stent") for mod("primary open angle") cond("glaucoma") as a standalone procedure or mod("in combination") with proc("phacoemulsification")'

union(
    intersect(
        proc()
            .mod("Eye"),
        proc("Gel Stent")
            .mod("XEN 45")
    )
        .for(
            cond("glaucoma")
                .mod("primary open angle")
        ),
    proc("phacoemulsification")
        .mod("in combination")
)