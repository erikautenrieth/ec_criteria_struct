'INC'

'4.  Palpable pedal pulses ( no vascular injury sustained )'

'4.  mod("Palpable") vital("pedal pulses") ( neg() obs("vascular injury") sustained )'

intersect(
    vital("pedal pulses")
        .mod("Palpable"),
    neg(
        obs("vascular injury")
    )
)