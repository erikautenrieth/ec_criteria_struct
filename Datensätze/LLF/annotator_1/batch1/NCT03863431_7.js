'INC'

'-  No cardiometabolic or inflammatory illness'

'-  neg() mod("cardiometabolic") or mod("inflammatory") cond()'

neg(
    cond()
        .mod("cardiometabolic") 
        .mod("inflammatory")
)