'INC'

'-  Currently have unilateral or bilateral ventilation tube ( s ) ( VTs ) inserted for otitis media with effusion ( OME ) or tympanic membrane retraction / retraction pocket ( TM - R / RP ) or a TM perforation after extrusion of a VT'

'-  eq(temporal_per(PRESENT)) have mod("unilateral") or mod("bilateral") proc("ventilation tube") ( s ) ( proc("VTs") ) mod("inserted") for cond("otitis media with effusion") ( cond("OME") ) or cond("tympanic membrane retraction") / cond("retraction pocket") ( cond("TM - R / RP") ) or a cond("TM perforation") after proc("extrusion of a VT")'

proc("ventilation tube")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .mod("unilateral")
    .mod("bilateral")
    .equiv(
        proc("VTs")
    )
    .mod("inserted")
    .for(
        union(
            cond("otitis media with effusion")
                .equiv(
                    cond("OME")
                ),
            union(
                cond("tympanic membrane retraction"),
                cond("retraction pocket")
            )
                .equiv(
                    cond("TM - R / RP")
                )
        ),
        seq(
            cond("TM perforation"),
            after(
                proc("extrusion of a VT")
            )
        )
    )