'INC'

'-  Subjects with a fasting plasma glucose ( FPG ) of 70 ~ 110 mg / dL ( inclusive of limits ) at the time of screening'

'-  Subjects with a lab("fasting plasma glucose") ( obs("FPG") ) of eq(val("70"), op(BETWEEN), val("110"), unit("mg"), unit("dL")) ( inclusive of limits ) at the time of screening'

lab("fasting plasma glucose")
    .equiv(
        obs("FPG")
    )
    .num_filter(
        eq(val("70"), op(BETWEEN), val("110"), unit("mg"), unit("dL"))
    )