'INC'

'-  Patients of both sexes with a diagnosis of stable CAD as follows : acute myocardial infarction or percutaneous coronary revascularization or coronary artery bypass graft surgery occured at least 12 months before entering the study or chronic stable angina .'

'-  Patients of both sexes with a diagnosis of stable() cond("CAD") as follows : cond("acute myocardial infarction") or proc("percutaneous coronary revascularization") or proc("coronary artery bypass graft surgery") occured eq(op(GTEQ), val("12"), temporal_unit(MONTH)) before entering the study or chronic() stable() cond("angina") .'

seq(
    cond("CAD")
        .stable()
        .equiv(
            cond("acute myocardial infarction"),
            proc("percutaneous coronary revascularization"),
            proc("coronary artery bypass graft surgery")
        ),
    before(
        cond("angina")
            .chronic()
            .stable()
            .temporality(
                eq(op(GTEQ), val("12"), temporal_unit(MONTH))
            )
    )
)