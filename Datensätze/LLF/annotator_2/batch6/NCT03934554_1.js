'INC'

'-  Dialysis or non - dialysis patients with chronic renal insufficiency with a GFR < 20 ml / min eligible for transplant'

'-  proc("Dialysis") or neg() - proc("dialysis") patients with cond("chronic renal insufficiency") with a lab("GFR") eq(op(LT), val("20"), unit("ml"), per(MINUTE)) eligible for transplant'

intersect(
    union(
        proc("Dialysis"),
        neg(
            proc("dialysis")
        )
    ),
    cond("chronic renal insufficiency"),
    lab("GFR")
        .num_filter(
            eq(op(LT), val("20"), unit("ml"), per(MINUTE))
        )
)