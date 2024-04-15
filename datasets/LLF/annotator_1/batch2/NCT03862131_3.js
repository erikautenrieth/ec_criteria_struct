'INC'

'-  Histological diagnosis of early or metastatic breast cancer , lymphoma , sarcoma , leukemia , myeloma , or lung cancer ( patients with treated and clinically stable brain metastasis are acceptable )'

'-  Histological diagnosis of mod("early") or mod("metastatic breast") cond("cancer") , cond("lymphoma") , cond("sarcoma") , cond("leukemia") , cond("myeloma") , or cond("lung cancer") ( patients with proc() and clinically stable() mod("brain") cond("metastasis") are acceptable )'

union(
    cond("cancer")
        .mod("early")
        .mod("metastatic breast"), 
    cond("lymphoma"), 
    cond("sarcoma"), 
    cond("leukemia"), 
    cond("myeloma"), 
    cond("lung cancer"),
    proc()
        .for(
            cond("metastasis")
                .mod("brain")
                .stable()
        )
)