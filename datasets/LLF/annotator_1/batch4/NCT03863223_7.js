'EXC'

'1.  History of anti - cancer therapy for MBC ( with the exception of one prior hormonal regimen for MBC) .'

'1.  eq(temporal_per(PAST)) of anti - cond("cancer") proc("therapy") for cond("MBC") ( with the except() of eq(val("one")) eq(temporal_per(PAST)) proc("hormonal regimen") for cond("MBC") ) .'

proc("therapy")
    .temporality(
        eq(temporal_per(PAST))
    )
    .for(
        cond("cancer"),
        cond("MBC")
    )
    .except(
        proc("hormonal regimen")
            .min_count(
                eq(val("one"))
            )
    )