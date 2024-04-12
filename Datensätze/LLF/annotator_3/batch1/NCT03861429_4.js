'INC'

'-  Understood By Others = < 1 ( MDS B 0800 ) / present in medical record'

'-  obs("Understood By Others") eq(op(EQ), op(LT), val("1")) ( code("MDS B 0800") ) / present in medical record'

obs("Understood By Others")
    .num_filter(
        eq(op(EQ), op(LT), val("1"))
    )
    .equiv(
        code("MDS B 0800")
    )
