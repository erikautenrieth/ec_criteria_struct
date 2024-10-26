'EXC'

'-  Conditions that are harmful to the inner ear ( chronic renal failure , history of noise exposure , usage of ototoxic drugs , chronic otitis media , ear surgery in the past , significant head trauma in the past , ear drum perforation ) .'

'-  cond() that are cond("harmful to the inner ear") ( chronic() cond("renal failure") , eq(temporal_per(PAST)) of cond("noise exposure") , usage of drug("ototoxic drugs") , chronic() cond("otitis media") , proc("ear surgery") in the eq(temporal_per(PAST)) , severity(SEVERE) mod("head") obs("trauma") in the eq(temporal_per(PAST)) , cond("ear drum perforation") ) .'

intersect(
    cond(),
    cond("harmful to the inner ear")
)
    .equiv(
        cond("renal failure")
            .chronic(),
        cond("noise exposure")
            .eq(temporal_per(PAST)),
        drug("ototoxic drugs"),
        cond("otitis media")
            .chronic(),
        proc("ear surgery")
            .temporality(
                (temporal_per(PAST))
            ),
        obs("trauma")
            .severity(SEVERE)
            .mod("head")
            .temporality(
                eq(temporal_per(PAST))
            ),
        cond("ear drum perforation")
    )