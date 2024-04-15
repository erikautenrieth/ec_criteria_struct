'INC'

'-  Both sexes aged between 20 - 90 years .'

'-  Both sexes age() between eq(val("20"), op(BETWEEN), val("90"), temporal_unit(YEAR)) .'

age()
    .num_filter(
        eq(val("20"), op(BETWEEN), val("90"), temporal_unit(YEAR))
    )