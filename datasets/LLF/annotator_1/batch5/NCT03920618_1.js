'INC'

'1.  Positive hepatitis b surface antigen or hepatitis b virus DNA > 0.5 year ;'

'1.  pol(POSITIVE) lab("hepatitis b surface antigen") or lab("hepatitis b virus DNA") eq(op(GT), val("0.5"), temporal_unit(YEAR)) ;'

union(
    lab("hepatitis b surface antigen"),
    lab("hepatitis b virus DNA")
)
.pol(POSITIVE)
.duration(
    eq(op(GT), val("0.5"), temporal_unit(YEAR))
)