'INC'

'-  LMNA + cases with pathogenic LMNA mutations for LMNA + and heart myocardial samples from the explanted hearts of LMNA + patients who are scheduled to undergo clinically indicated heart transplantation at the Papworth Hospital NHS Trust .'

'-  cond("LMNA") pol(POSITIVE) cases with cond("pathogenic LMNA mutations") for cond("LMNA") pol(POSITIVE) and spec("heart myocardial samples") from the mod("explanted hearts") of cond("LMNA") pol(POSITIVE) patients who are eq(temporal_per(FUTURE)) clinically indication() proc("heart transplantation") at the loc(hosp("Papworth Hospital")) NHS Trust .'

intersect(
    cond("LMNA")
        .pol(POSITIVE),
    cond("pathogenic LMNA mutations"),
    cond("LMNA")
        .pol(POSITIVE),
    spec("heart myocardial samples")
        .mod("explanted hearts"),
    indication(
        proc("heart transplantation")
    )
)