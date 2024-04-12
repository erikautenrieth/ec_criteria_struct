'EXC'

'-  Participant has a history of epilepsy , any significant cardiac , respiratory , renal , hepatic , gastrointestinal , opthalmologic , hematologic , or psychiatric disease or disorder , or any uncontrolled medical illness .'

'-  Participant has a eq(temporal_per(PAST)) of cond("epilepsy") , any severity(SEVERE) mod("cardiac") , mod("respiratory") , mod("renal") , mod("hepatic") , mod("gastrointestinal") , mod("opthalmologic") , mod("hematologic") , or mod("psychiatric") cond() or cond() , or any change() cond() .'

union(
    cond("epilepsy")
        .temporality(
            eq(temporal_per(PAST))
        ),
    cond()
        .severity(SEVERE)
        .mod("cardiac")
        .mod("respiratory")
        .mod("renal")
        .mod("hepatic")
        .mod("gastrointestinal")
        .mod("opthalmologic")
        .mod("hematologic")
        .mod("psychiatric"),
    cond(),
    cond()
        .change()
)
