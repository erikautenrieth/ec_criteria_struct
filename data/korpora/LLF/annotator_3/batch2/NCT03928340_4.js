'INC'

'-  Haemoglobin A 1 C ( HbA 1c ) level between 7 % to 11 %'

'-  lab("Haemoglobin A 1 C") ( lab("HbA 1c") ) level eq(op(BETWEEN), val("7"), unit("%"), val("11"), unit("%"))'

lab("Haemoglobin A 1 C")
    .equiv(
        lab("HbA 1c")
    )
    .num_filter(
        eq(op(BETWEEN), val("7"), unit("%"), val("11"), unit("%"))
    )