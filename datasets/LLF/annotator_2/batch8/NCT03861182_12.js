'EXC'

'-  Any drug that modifies the coagulation cascade during the 48 h preceding the sampling'

'-  Any drug() that change() the obs("coagulation cascade") during the eq(val("48"), temporal_unit(HOUR)) preceding the sampling'

obs("coagulation cascade")
    .change()
    .caused_by(
        drug()
    )
    .temporality(
        eq(val("48"), temporal_unit(HOUR))
    )