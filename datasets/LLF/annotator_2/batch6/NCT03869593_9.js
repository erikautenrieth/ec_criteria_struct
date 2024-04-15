'EXC'

'-  solid organ transplant patient or hematopoietic stem cell transplant'

'-  proc("solid organ transplant") patient or mod("hematopoietic") proc("stem cell transplant")'

union(
    proc("solid organ transplant"),
    proc("stem cell transplant")
        .mod("hematopoietic")
)