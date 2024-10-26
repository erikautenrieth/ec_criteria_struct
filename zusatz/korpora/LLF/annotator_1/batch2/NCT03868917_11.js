'EXC'

'-  Comorbid conditions such as sepsis , unstable angina , congestive heart failure'

'-  mod("Comorbid") cond() such as cond("sepsis") , change() cond("angina") , cond("congestive heart failure")'

cond()
    .mod("Comorbid")
    .equiv(
        cond("sepsis"), 
        cond("angina")
            .change(),
        cond("congestive heart failure")
    )