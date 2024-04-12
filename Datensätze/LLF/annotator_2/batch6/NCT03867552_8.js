'EXC'

'-  Conditions causing acute pain e . g .  abdominal trauma'

'-  cond() causing acute() obs("pain") e . g .  obs("abdominal trauma")'

obs("pain")
    .acute()
    .caused_by(
        cond()
            .equiv(
                obs("abdominal trauma")
            )
    )