'INC'

'2.  Tumor diagnosed as Glioblastoma Multiforme on MRI with distinct ring - like pattern of contrast enhancement with thick irregular walls and a core area reduced signal suggestive of tumour necrosis as assessed by the surgeon'

'2.  cond("Tumor") diagnosed as mod("Glioblastoma Multiforme") on proc("MRI") with mod("distinct ring - like pattern") of proc("contrast enhancement") with mod("thick irregular walls") and a mod("core area reduced signal") possible() of cond("tumour necrosis") as assessed by the prov("surgeon")'

intersect(
    cond("Tumor")
        .mod("Glioblastoma Multiforme")
        .found_by(
            proc("MRI")
        )
        .mod("distinct ring - like pattern"),
    proc("contrast enhancement")
        .mod("core area reduced signal")
        .mod("thick irregular walls"),
    cond("tumour necrosis")
        .possible()
        .prov("surgeon")
)
