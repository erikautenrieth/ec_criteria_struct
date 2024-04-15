'INC'

'-  Dental examination and - treatment before start of therapy'

'-  proc("Dental") mod("examination") and - mod("treatment") before eq(temporal_rec(FIRST_TIME)) of proc("therapy")'

seq(
    proc("Dental")
        .mod("examination")
        .mod("treatment"),
    before(
        proc("therapy")
            .temporality(
                eq(temporal_rec(FIRST_TIME))
            )
    )
)