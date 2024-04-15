'INC'

'-  Epidural analgesia preferred due to an anticipated high risk of conversion to thoracotomy'

'-  proc("Epidural analgesia") indication() due to an anticipated pol(HIGH) risk() of mod("conversion") to proc("thoracotomy")'

indication(
    proc("Epidural analgesia")
)
    .caused_by(
        risk(
            proc("thoracotomy")
                .mod("conversion")

        )
            .pol(HIGH)
    )