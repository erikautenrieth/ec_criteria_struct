'EXC'

'-  Use of photosensitizing medication ( phototoxic drugs , photoallergic drugs ) in the 3 months preceding the study'

'-  Use of drug("photosensitizing medication") ( drug("phototoxic drugs") , drug("photoallergic drugs") ) in the eq(val("3"), temporal_unit(MONTH)) preceding the study'

drug("photosensitizing medication")
    .equiv(
        drug("phototoxic drugs"), 
        drug("photoallergic drugs")
    )
    .temporality(
        eq(val("3"), temporal_unit(MONTH))
    )