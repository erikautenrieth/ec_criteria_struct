'EXC'

'-  The participant has a condition or is in a situation which , in the Principal Investigator\'s opinion , may put the participant at significant risk , may confound the study results , or may interfere significantly with the participant\'s participation in the study'

'-  The participant has a cond() or is in a situation which , in the Principal Investigator\'s opinion , may put the participant at severity(SEVERE) risk() , may confound the study results , or may interfere significantly with the participant\'s participation in the study'


union(
    cond(),
    risk()
        .severity(SEVERE)
)
