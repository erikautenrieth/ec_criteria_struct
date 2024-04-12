'EXC'

'-  presence of any contraindication for cystoscopy ( such as lidocaine allergy , urinary tract infection , and urethra - related anatomical disorders )'

'-  presence of any contraindication() for proc("cystoscopy") ( such as drug("lidocaine") allergy() , cond("urinary tract infection") , and mod("urethra") - related cond("anatomical disorders") )'

contraindication(
    proc("cystoscopy")
)
.equiv(
    allergy(
        drug("lidocaine")
    ),
    cond("urinary tract infection"),
    cond("anatomical disorders")
        .mod("urethra")
)