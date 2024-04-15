'INC'

'-  The patient is deemed to be at risk for jaundice or the patient is undergoing blue light phototherapy for treatment of jaundice .'

'-  The patient is deemed to be at risk() for cond("jaundice") or the patient is eq(temporal_per(PRESENT)) mod("blue light") proc("phototherapy") for proc() of cond("jaundice") .'

union(
    risk(
        cond("jaundice")
    ),
    proc("phototherapy")
        .temporality(
            eq(temporal_per(PRESENT))
        )
        .mod("blue light")
        .for(
            cond("jaundice")
        )
)
