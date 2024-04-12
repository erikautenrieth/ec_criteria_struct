'INC'

'2.  Patient received ≥ 1 dose of ceftazidime - avibactam in routine practice at participating site since 01 January , 2018 onwards or since the date of launch in the country if it is after 01 January , 2018 .'

'2.  Patient eq(temporal_per(PAST)) eq(op(GTEQ), val("1")) dose of drug("ceftazidime - avibactam") in routine practice at participating site eq(op(GTEQ), val("01 January , 2018")) onwards or since the date of launch in the country if it is after 01 January , 2018 .'

drug("ceftazidime - avibactam")
    .temporality(
        eq(temporal_per(PAST))
    )
    .num_filter(
        eq(op(GTEQ), val("1"))
    )
    .temporality(
        eq(op(GTEQ), val("01 January , 2018"))
    )