'INC'

'-  DCMWT cases : patients with heart muscle failure but with wild - type lamin gene .  Heart myocardial samples from the explanted hearts of DCMWT patients who are scheduled to undergo clinically indicated heart transplantation at the Papworth Hospital NHS Trust .'

'-  cond("DCMWT") cases : patients with cond("heart muscle failure") but with mod("wild - type") cond("lamin gene") .  Heart myocardial samples from the mod("explanted hearts") of cond("DCMWT") patients who are eq(temporal_per(FUTURE)) to undergo clinically indication() proc("heart transplantation") at the loc(hosp("Papworth Hospital NHS Trust")) .'

intersect(
    cond("DCMWT"),
    cond("heart muscle failure"),
    cond("lamin gene")
        .mod("wild - type"),
    intersect(
        cond("DCMWT")
            .mod("explanted hearts"),
        indication(
            proc("heart transplantation")
                .temporality(
                    eq(temporal_per(FUTURE))
                )
                .loc(hosp("Papworth Hospital NHS Trust"))
        )    
    )
)