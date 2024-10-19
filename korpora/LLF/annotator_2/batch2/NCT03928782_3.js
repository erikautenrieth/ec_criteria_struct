'EXC'

'-  subjects who suffer from serious other systemic diseases subjects who are unwilling or unable to cooperate with this clinical study other serious cases that probably hinder this clinical study'

'-  subjects who suffer from severity(SEVERE) other mod("systemic") cond() subjects who are unwilling or unable to cooperate with this clinical study other severity(SEVERE) cond() that probably hinder this clinical study'

union(
    cond()
        .severity(SEVERE)
        .mod("systemic"),
    cond()
        .severity(SEVERE)
)