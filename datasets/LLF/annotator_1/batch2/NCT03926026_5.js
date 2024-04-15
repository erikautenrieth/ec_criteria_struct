'EXC'

'-  IOP > 21 mmHg at Screening or Baseline / Day 1 Visits'

'-  measurement("IOP") eq(op(GT), val("21"), unit("mmHg")) at Screening or Baseline / Day 1 Visits'

measurement("IOP")
    .num_filter(
        eq(op(GT), val("21"), unit("mmHg"))
    )