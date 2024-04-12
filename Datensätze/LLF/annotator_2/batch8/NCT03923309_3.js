'INC'

'-  no radical surgery after neoadjuvant therapy'

'-  neg() mod("radical") proc("surgery") after proc("neoadjuvant therapy")'

neg(
    seq(
        proc("surgery")
            .mod("radical"),
        after(
            proc("neoadjuvant therapy")
        )
    )
)