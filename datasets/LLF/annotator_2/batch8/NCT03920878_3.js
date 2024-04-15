'EXC'

'-  Patients who have undergone panretinal photocoagulation ( PRP ) in prior 4 months or an ocular condition ( other than cataract and DME ) that might affect visual acuity during course of study .'

'-  Patients who have eq(temporal_per(PAST)) proc("panretinal photocoagulation") ( proc("PRP") ) in eq(temporal_per(PAST), val("4"), temporal_unit(MONTH)) or an cond("ocular condition") ( except() cond("cataract") and cond("DME") ) that might affect visual acuity during course of study .'

union(
    proc("panretinal photocoagulation")
        .temporality(
            and(
                eq(temporal_per(PAST)),
                eq(temporal_per(PAST), val("4"), temporal_unit(MONTH))
            )
        )
        .equiv(
            proc("PRP")
        ),
    cond("ocular condition")
        .except(
            cond("cataract"),
            cond("DME")
        )
)