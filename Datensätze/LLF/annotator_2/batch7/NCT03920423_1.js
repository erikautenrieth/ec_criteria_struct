'INC'

'-  requirement of radial arterial catheterization during peri operative period'

'-  indication() proc("radial arterial catheterization") during peri proc("operative") period'

seq(
    indication(
        proc("radial arterial catheterization")
    ),
    during(
        proc("operative")
    )
)