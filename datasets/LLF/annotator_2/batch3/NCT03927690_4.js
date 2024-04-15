'INC'

'4.  The ETDRS letter score in the study eye must be between 24 and 70 letters ( approximate Snellen equivalent of 20 / 40 - 20 / 320 ) .  The non - study eye ( fellow eye ) should be ≥ 34 letters or better ( approximate Snellen equivalent of 20 / 200 ) at screening'

'4.  The clin_score("ETDRS letter score") in the study mod("eye") must be eq(op(BETWEEN), val("24"), val("70"), unit("letters")) ( approximate obs("Snellen") equivalent of 20 / 40 eq(val("20"), val("40"), op(BETWEEN), val("20"), val("320")) / 320 ) .  The non - study eye ( fellow eye ) should be eq(op(GTEQ), val("34"), unit("letters"), op(GTEQ)) ( approximate obs("Snellen") equivalent of eq(val("20"), val("200")) ) at screening'

clin_score("ETDRS letter score")
    .mod("eye")
    .num_filter(
        eq(op(BETWEEN), val("24"), val("70"), unit("letters"))
    )
    .equiv(
        obs("Snellen")
            .num_filter(
                eq(val("20"), val("40"), op(BETWEEN), val("20"), val("320"))
            )
    )