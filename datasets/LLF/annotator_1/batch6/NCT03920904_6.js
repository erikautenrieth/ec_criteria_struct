'EXC'

'-  Contraindication to regional anesthesia : infection in the designated area , severe congenital coagulopathy or inadequate hemostasis before PIFB'

'-  contraindication() to proc("regional anesthesia") : cond("infection") in the designated area , severity(SEVERE) mod("congenital") cond("coagulopathy") or pol(ABNORMAL) proc("hemostasis") before proc("PIFB")'

contraindication(
    proc("regional anesthesia")
)
.equiv(
    cond("infection"),
    cond("coagulopathy")
        .severity(SEVERE)
        .mod("congenital"),
    seq(
        proc("hemostasis")
            .pol(ABNORMAL),
        before(
            proc("PIFB")
        )
    )
    
)