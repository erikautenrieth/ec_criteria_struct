'EXC'

'-  Daily opioid use for pain control before surgery in excess of systemic morphine equivalent to 10 mg *'

'-  eq(per(DAY)) drug("opioid") use for obs("pain") control before proc("surgery") in excess of drug("systemic morphine") equivalent to eq(op(GT), val("10"), unit("mg")) *'

seq(
    drug("opioid")
        .temporality(
            eq(per(DAY))
        )
        .for(
            obs("pain")
        )
        .equiv(
            drug("systemic morphine")
        )
        .num_filter(
            eq(op(GT), val("10"), unit("mg"))
        ),
    before(
        proc("surgery")
    )
)