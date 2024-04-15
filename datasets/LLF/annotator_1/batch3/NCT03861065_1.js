'INC'

'-  Patients with high risk class II , class III , class IV abdominal wounds'

'-  Patients with pol(HIGH) risk() eq(unit("class"), val("II"), unit("class"), val("III")) mod("abdominal") obs("wounds")'

risk()
    .pol(HIGH)    
    .caused_by(
        obs("wounds")
            .num_filter(
                eq(unit("class"), val("II"), unit("class"), val("III"))
            )
            .mod("abdominal")
    )
