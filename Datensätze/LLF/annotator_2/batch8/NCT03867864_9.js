'EXC'

'-  The type of headache was neither migraine nor frequent episodic tension - type headache after diagnosed by the neurologist .'

'-  The type of cond("headache") was except() cond("migraine") nor mod("frequent episodic tension - type") cond("headache") after diagnosed by the prov("neurologist") .'

seq(
    cond("headache")
        .except(
            cond("migraine"),
            cond("headache")
                . mod("frequent episodic tension - type")
        ),
    after(
        prov("neurologist")
    )
)