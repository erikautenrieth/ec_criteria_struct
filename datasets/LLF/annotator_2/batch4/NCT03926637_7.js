'EXC'

'-  Participants younger than 18 years of age , unless their parent or legal guardian provides the required signed and dated informed consent and authorization to use confidential health information and the participant provides assent in accordance with national and local subject privacy regulations'

'-  Participants eq(op(LT), val("18"), temporal_unit(YEAR)) of age() , unless their parent or legal guardian provides the required signed and dated informed consent and authorization to use confidential health information and the participant provides assent in accordance with national and local subject privacy regulations'

age()
    .num_filter(
        eq(op(LT), val("18"), temporal_unit(YEAR))
    )