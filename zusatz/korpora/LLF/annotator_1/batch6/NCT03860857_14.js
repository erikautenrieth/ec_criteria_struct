'EXC'

'7.  MRI contraindications , e . g .  pacemakers , aneurysm clips , artificial heart valves , ear implants , metal fragments or foreign objects in the eyes , skin or body .  Females who are pregnant or trying to get pregnant are also excluded ;'

'7.  proc("MRI") contraindication() , e . g .  proc("pacemakers") , proc("aneurysm clips") , proc("artificial heart valves") , proc("ear implants") , cond("metal fragments") or mod("foreign") obs("objects") in the mod("eyes") , mod("skin") or mod("body") .  female() who are cond("pregnant") or trying to get pregnant are also neg() ;'

union(
    contraindication(
        proc("MRI")
    )
        .equiv(
            proc("pacemakers"),
            proc("aneurysm clips"),
            proc("artificial heart valves"),
            proc("ear implants"),
            cond("metal fragments"),
            obs("objects")
                .mod("foreign")
                .mod("eyes")
                .mod("skin") 
                .mod("body")
        ),
    neg(
        intersect(
            female(),
            cond("pregnant")
        )
    )
)
