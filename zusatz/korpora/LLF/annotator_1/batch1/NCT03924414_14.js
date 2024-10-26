'EXC'

'-  Any other criteria , which would make the patient unsuitable to participate in this study as determined by the study staff ( e . g . , an uncontrolled drug and / or alcohol addiction )'

'-  Any other cond() , which would make the patient unsuitable to participate in this study as determined by the study staff ( e . g . , an change() mod("drug") and / or mod("alcohol") cond("addiction") )'

cond()
    .equiv(
        cond("addiction")
            .change()
            .mod("drug")
            .mod("alcohol")
    )