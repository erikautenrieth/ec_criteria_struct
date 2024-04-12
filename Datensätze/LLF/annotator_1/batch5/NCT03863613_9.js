'EXC'

'-  Cervical dilation with visible amniotic membranes or amniotic membranes prolapsed into the vagina'

'-  obs("Cervical dilation") with visible cond("amniotic membranes") or cond("amniotic membranes prolapsed") mod("into the vagina")'

union(
    intersect(
        obs("Cervical dilation"),
        cond("amniotic membranes")
    ), 
    cond("amniotic membranes prolapsed")
        .mod("into the vagina")
)