'INC'

'2.  AO / OTA 42 open tibia fractures'

'2.  eq(val("AO"), val("OTA 42")) mod("open tibia") cond("fractures")'

cond("fractures")
    .num_filter(
        eq(val("AO"), val("OTA 42"))
    )
    .mod("open tibia")