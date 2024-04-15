'EXC'

'-  Those with a medical history of gastrointestinal diseases ( ulcers , Crohn\'s disease , etc . ) or surgery ( excluding simple appendectomy or hernia repair ) , and these situations can affect the absorption of the study drug .'

'-  Those with a medical eq(temporal_per(PAST)) of cond("gastrointestinal diseases") ( cond("ulcers") , cond("Crohn\'s disease") , etc . ) or proc("surgery") ( except() mod("simple") proc("appendectomy") or proc("hernia repair") ) , and these situations can affect the absorption of the study drug .'

union(
    cond("gastrointestinal diseases")
        .temporality(
            eq(temporal_per(PAST))
        )
        .equiv(
            cond("ulcers"),
            cond("Crohn\'s disease")
        ),
    proc("surgery")
        .except(
            union(
                proc("appendectomy"),
                proc("hernia repair")
            )
                .mod("simple")
        )
)