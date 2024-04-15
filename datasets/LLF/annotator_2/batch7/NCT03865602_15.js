'EXC'

'6.  patients with infection ruled out during the index hospitalization .'

'6.  patients with cond("infection") neg() during the index enc(INPATIENT) .'

seq(
    neg(
        cond("infection")
    ),
    during(
        enc(INPATIENT)
    )
)