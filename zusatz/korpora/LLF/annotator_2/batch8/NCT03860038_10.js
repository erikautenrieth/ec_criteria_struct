'EXC'

'3.  Subject has previously received allogenic stem cell transplant , or subject has received autologous stem cell transplant within 3 months before administration of the study agent;'

'3.  Subject has eq(temporal_per(PAST)) received mod("allogenic") proc("stem cell transplant") , or subject has received mod("autologous") proc("stem cell transplant") eq(op(LTEQ), val("3"), temporal_unit(MONTH)) before administration of the study drug() ;'

seq(
    union(
        proc("stem cell transplant")
            .temporality(
                eq(temporal_per(PAST))
            )
            .mod("allogenic"),
        proc("stem cell transplant")
            .mod("autologous")
    ),
    before(
        drug()
            .temporality(
                eq(op(LTEQ), val("3"), temporal_unit(MONTH))
            )
    )
)