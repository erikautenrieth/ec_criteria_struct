'INC'

'1.  All patients treated with radical prostatectomy for localized prostate cancer between 2000 and 2017 who had biobank samples taken when developing biochemical recurrence .'

'1.  All patients treated with proc("radical prostatectomy") for mod("localized") cond("prostate cancer") eq(op(BETWEEN), val("2000"), val("2017")) who had spec("biobank samples") eq(temporal_per(PAST)) when developing cond("biochemical recurrence") .'

intersect(
    proc("radical prostatectomy")
        .for(
            cond("prostate cancer")
                .mod("localized")
        )
        .temporality(
            eq(op(BETWEEN), val("2000"), val("2017"))
        ),
    spec("biobank samples")
        .temporality(
            eq(temporal_per(PAST))
        ),
    cond("biochemical recurrence")
)  