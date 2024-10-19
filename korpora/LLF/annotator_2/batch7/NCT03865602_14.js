'EXC'

'5.  patients with a change in code status ( i . e . , do not resuscitate , do not intubate ) within 24 hours after admission due to the general assumption of increased risk of exposure to less aggressive treatment ;'

'5.  patients with a change() in obs("code status") ( i . e . , obs("do not resuscitate") , obs("do not intubate") ) eq(op(LTEQ), val("24"), temporal_unit(HOUR)) after enc(INPATIENT) due to the general assumption of increased risk of exposure to less aggressive treatment ;'

seq(
    obs("code status")
        .change()
        .equiv(
            obs("do not resuscitate"),
            obs("do not intubate")
        ),
    after(
        enc(INPATIENT)
            .temporality(
                eq(op(LTEQ), val("24"), temporal_unit(HOUR))
            )
    )
)