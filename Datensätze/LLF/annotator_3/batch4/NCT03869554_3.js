'INC'

'-  Patients whose clinical presentation meets at least one of the following criteria : - Undetermined nephropathy despite renal biopsy , - Nephroangiosclerosis as the predominant lesion - Chronic tubulointerstitial nephropathy , - Glomerulosclerosis , - Segmental and focal hyalinosis . - Optically normal kidney or seat of minimal lesions'

'-  Patients whose clinical presentation meets eq(op(GTEQ), val("one")) of criteria() : - mod("Undetermined") cond("nephropathy") despite proc("renal biopsy") , - cond("Nephroangiosclerosis") as the cond("predominant lesion") - chronic() cond("tubulointerstitial nephropathy") , - cond("Glomerulosclerosis") , - mod("Segmental") and mod("focal") cond("hyalinosis") . - Optically pol(NORMAL) mod("kidney") or mod("seat of minimal") cond("lesions")'
criteria(
    intersect(
        cond("nephropathy")
            .mod("Undetermined"),
        proc("renal biopsy")
    ),
    intersect(
        cond("Nephroangiosclerosis"),
        cond("predominant lesion")
    ),
    cond("tubulointerstitial nephropathy")
        .chronic(),
    cond("Glomerulosclerosis"),
    cond("hyalinosis")
        .mod("Segmental")
        .mod("focal"),
    cond("lesions")
        .pol(NORMAL)
        .mod("kidney")
        .mod("seat of minimal")
)
    .min_count(
        eq(op(GTEQ), val("one"))
    )

