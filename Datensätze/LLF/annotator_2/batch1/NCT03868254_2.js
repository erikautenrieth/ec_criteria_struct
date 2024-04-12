'INC'

'-  XEN 45 Gel Stent was implanted between 1 January 2014 and 1 October 2015'

'-  mod("XEN 45") proc("Gel Stent") was implanted eq(op(BETWEEN), val("1 January 2014"), val("1 October 2015"))'

proc("Gel Stent")
    .mod("XEN 45")
    .temporality(
        eq(op(BETWEEN), val("1 January 2014"), val("1 October 2015"))
    )