'INC'

'3.  > = 80 % diary compliance during the baseline period'

'3.  eq(op(GTEQ), val("80"), unit("%")) obs("diary compliance") during the baseline period'

obs("diary compliance")
    .num_filter(
        eq(op(GTEQ), val("80"), unit("%"))
    )