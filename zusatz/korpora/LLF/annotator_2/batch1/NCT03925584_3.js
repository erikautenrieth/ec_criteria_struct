'INC'

'-  24 hours post congenital heart surgery'

'-  eq(val("24"), temporal_unit(HOUR), proc("heart surgery")) post mod("congenital") proc("heart surgery")'

proc("heart surgery")
    .temporality(
        eq(val("24"), temporal_unit(HOUR), proc("heart surgery"))
    )
    .mod("congenital")