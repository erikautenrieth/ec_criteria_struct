'EXC'

'-  use of anabolic , anti - inflammatory and analgesic drugs 72 hours before the evaluations ;'

'-  use of mod("anabolic") , mod("anti - inflammatory") and mod("analgesic") drug("drugs") eq(val("72"), temporal_unit(HOUR)) before the evaluations ;'

drug("drugs")
    .mod("anabolic")
    .mod("anti - inflammatory")
    .mod("analgesic")
    .temporality(
        eq(val("72"), temporal_unit(HOUR))
    )