'EXC'

'-  Patient refusal Contraindications to regional anesthesia Known allergy to local anesthetics Bleeding diathesis Use of any anti - coagulants Inability to provide informed consent Severe kidney or liver disease Inability to operate PCA system Patient with psychiatric disorders'

'-  Patient refusal contraindication() to proc("regional anesthesia") Known allergy() to drug("local anesthetics") obs("Bleeding") cond("diathesis") Use of any drug("anti - coagulants") Inability to provide informed consent severity(SEVERE) mod("kidney") or mod("liver") cond() Inability to operate PCA system Patient with cond("psychiatric disorders")'

union(
    contraindication(
        proc("regional anesthesia")
    ),
    allergy(
        drug("local anesthetics")
    ),
    obs("Bleeding"),
    cond("diathesis"),
    drug("anti - coagulants"),
    cond()
        .mod("kidney")
        .mod("liver"),
    cond("psychiatric disorders")
)