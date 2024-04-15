'INC'

'-  High risk pregnancies : DM , or GDM , or hypertension , or preeclampsia'

'-  pol(HIGH) risk() cond("pregnancies") : cond("DM") , or cond("GDM") , or cond("hypertension") , or cond("preeclampsia")'

risk(
    cond("pregnancies")
)
    .pol(HIGH)
    .equiv(
        cond("DM"),
        cond("GDM"),
        cond("hypertension"),
        cond("preeclampsia")
    )


