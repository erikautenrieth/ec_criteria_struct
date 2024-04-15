'INC'

'-  Children is vaccinated with hepatitis B vaccine after birth ;'

'-  child() is vaccinated with immune("hepatitis B vaccine") after birth() ;'

seq(
    intersect(
        child(),
        immune("hepatitis B vaccine")
    ),
    after(
        birth()
    )
)