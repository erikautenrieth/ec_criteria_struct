'INC'

'-  The type of headache is migraine or frequent episodic tension - type headache , which is defined by the Headache Classification Committee of the International Headache Society .  If the symptoms of a headache cannot be defined , the investigator will refer the potential participant to a neurologist for further diagnosis .'

'-  The type of cond("headache") is cond("migraine") or mod("frequent episodic tension - type") cond("headache") , which is defined by the Headache Classification Committee of the International Headache Society .  If the symptoms of a headache cannot be defined , the investigator will refer the potential participant to a neurologist for further diagnosis .'

cond("headache")
    .equiv(
        cond("migraine"),
        cond("headache")
            .mod("frequent episodic tension - type")
    )