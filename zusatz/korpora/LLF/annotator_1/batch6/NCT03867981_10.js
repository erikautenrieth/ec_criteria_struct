'EXC'

'-  Any medical condition for which weight loss , dietary restriction , or physical activity is contraindicated'

'-  Any cond() for which obs("weight loss") , proc("dietary restriction") , or social_habit("physical activity") is contraindication()'

contraindication(
    obs("weight loss"),
    proc("dietary restriction"),
    social_habit("physical activity")
)
.caused_by(
    cond()
)