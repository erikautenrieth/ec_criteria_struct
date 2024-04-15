'EXC'

'-  Patients with unilateral disorders , such as stroke , carpal tunnel syndrome , broken wrist with nerve damage , Dupuytren contracture , or any similar wrist injury .'

'-  Patients with cond("unilateral disorders") , such as cond("stroke") , cond("carpal tunnel syndrome") , cond("broken") mod("wrist") with mod("nerve damage") , cond("Dupuytren contracture") , or any similar mod("wrist") obs("injury") .'

cond("unilateral disorders")
    .equiv(
        cond("stroke"),
        cond("carpal tunnel syndrome"),
        cond("broken")
            .mod("wrist")
            .mod("nerve damage"),
        cond("Dupuytren contracture"),
        obs("injury")
            .mod("wrist")
        
    )
