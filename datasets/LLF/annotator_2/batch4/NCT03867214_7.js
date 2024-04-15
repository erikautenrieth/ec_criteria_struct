'EXC'

'-  Patients with any cardiovascular problems ( such as myocardiac infarction history , atrial fibrillation , angina ) ;'

'-  Patients with any cond("cardiovascular problems") ( such as cond("myocardiac infarction") eq(temporal_per(PAST)) , cond("atrial fibrillation") , cond("angina") ) ;'

cond("cardiovascular problems")
    .equiv(
        cond("myocardiac infarction")
            .temporality(
                eq(temporal_per(PAST))
            ),
        cond("atrial fibrillation"),
        cond("angina")
    )