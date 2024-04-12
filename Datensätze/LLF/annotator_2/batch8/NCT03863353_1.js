'INC'

'-  Undergoing an elective surgical procedure for which it is expected they will receive a prescription pain medicine for management of pain during recovery at home .'

'-  eq(temporal_per(PRESENT)) an mod("elective") proc("surgical procedure") for which it is expected they will receive a prescription pain medicine for management of pain during recovery at home .'

proc("surgical procedure")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .mod("elective")