'EXC'

'-  Patients with contraindication to spinal anesthesia ( coagulopathy , local infection , allergy to local anesthetic )'

'-  Patients with contraindication() to proc("spinal anesthesia") ( cond("coagulopathy") , mod("local") cond("infection") , allergy() to proc("local anesthetic") )'

contraindication(
    proc("spinal anesthesia")
)
.equiv(
    cond("coagulopathy"),
    cond("infection")
        .mod("local"),
    allergy(
        proc("local anesthetic")
    )
)