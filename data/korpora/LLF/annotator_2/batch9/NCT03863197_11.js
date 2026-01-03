'EXC'

'-  Severe co - morbidities ( severe epilepsy , non - correctable visual impairment , autism spectrum disorders , mental problems that prevent comprehensiveness of the tasks )'

'-  severity(SEVERE) cond("co - morbidities") ( severity(SEVERE) cond("epilepsy") , mod("non - correctable") cond("visual impairment") , cond("autism spectrum disorders") , cond("mental problems") that prevent comprehensiveness of the tasks )'

cond("co - morbidities")
    .severity(SEVERE)
    .equiv(
        cond("epilepsy")
            .severity(SEVERE),
        cond("visual impairment")
            .mod("non - correctable"),
        cond("autism spectrum disorders"),
        cond("mental problems")
    )