'EXC'

'-  Excessive caffeine intake or persistent alcohol intake'

'-  pol(HIGH) drug("caffeine") intake or chronic() drug("alcohol") intake'

union(
    drug("caffeine")
        .pol(HIGH),
    drug("alcohol")
        .chronic()
)
