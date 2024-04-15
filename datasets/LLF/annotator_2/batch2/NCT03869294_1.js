'INC'

'-  1. Histologically confirmed pancreatic adenocarcinoma 2. Locally advanced or metastatic PC 3. Chemotherapy - naïve 4. ECOG performance status of 0 or 1 5.  An adequate bone marrow , liver function and kidney function'

'-  1. proc("Histologically") confirmed cond("pancreatic adenocarcinoma") 2. mod("Locally advanced") or mod("metastatic") cond("PC") 3. proc("Chemotherapy") - neg() 4. clin_score("ECOG performance status") of eq(val("0"), val("1")) 5.  An pol(NORMAL) mod("bone marrow") , mod("liver") cond("function") and mod("kidney") cond("function")'

intersect(
    proc("Histologically"),
    cond("pancreatic adenocarcinoma"),
    cond("PC")
        .mod("Locally advanced")
        .mod("metastatic"),
    neg(
        proc("Chemotherapy")
    ),
    clin_score("ECOG performance status")
        .num_filter(
            eq(val("0"), val("1"))
        ),
    cond("function")
        .pol(NORMAL)
        .mod("bone marrow")
        .mod("liver"),
    cond("function")
        .mod("kidney") 
)