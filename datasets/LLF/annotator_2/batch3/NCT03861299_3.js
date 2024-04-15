'INC'

'3.  Tumors situated in or near eloquent areas ; motor cortex , sensory cortex , subcortical pyramidal tract or speech areas as indicated on MRI ( Sawaya Grading II and II )'

'3.  cond("Tumors") situated mod("in or near eloquent areas") ; mod("motor cortex") , mod("sensory cortex") , mod("subcortical pyramidal tract") or mod("speech areas") as indicated on proc("MRI") ( cond("Sawaya") eq(unit("Grading"), val("II"), val("II")) )'

cond("Tumors")
    .mod("in or near eloquent areas")
    .mod("motor cortex")
    .mod("sensory cortex")
    .mod("subcortical pyramidal tract")
    .mod("speech areas")
    .found_by(
        proc("MRI")
    )
    .equiv(
        cond("Sawaya")
            .num_filter(
                eq(unit("Grading"), val("II"), val("II"))
            )
    )