'INC'

'-  wear one and the same pair of shoes during walking / running activities during this period'

'-  social_habit("wear") eq(val("one")) and the mod("same pair of shoes") during social_habit("walking") / social_habit("running") activities during this period'

seq(
    social_habit("wear")
        .num_filter(
            eq(val("one"))
        )
        .mod("same pair of shoes"),
    during(
        social_habit("walking"),
        social_habit("running")
    )
)
    