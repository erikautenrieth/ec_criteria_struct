'EXC'

'2.  Administered Vitamin E or non - steroidal anti - inflammatory drugs or Collagen within 1 week of the date of the screening , or who require these during the period of the study'

'2.  eq(temporal_per(PAST)) drug("Vitamin E") or drug("non - steroidal anti - inflammatory drugs") or drug("Collagen") eq(op(LTEQ), val("1"), temporal_unit(WEEK)) of the date of the screeningt , or who require these during the period of the study'

union(
    drug("Vitamin E"),
    drug("non - steroidal anti - inflammatory drugs"),
    drug("Collagen")
)
    .temporality(
        and(
            eq(temporal_per(PAST)),
            eq(op(LTEQ), val("1"), temporal_unit(WEEK))
        )
    )