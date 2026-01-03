'EXC'

'6.  Temperature on admission < 30 °C'

'6.  vital("Temperature") on enc(INPATIENT) eq(op(LT), val("30"), unit("°C"))'

seq(
    vital("Temperature")
        .num_filter(
            eq(op(LT), val("30"), unit("°C"))
        ), 
    during(
        enc(INPATIENT)
    )
)