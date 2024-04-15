'EXC'

'-  chronic administration of drugs , which promote bone or muscle loss'

'-  chronic() administration of drug() , which change() mod("bone") or mod("muscle") cond("loss")'

cond("loss")
    .change()
    .mod("bone")
    .mod("muscle") 
    .caused_by(
        drug()
            .chronic()
    )