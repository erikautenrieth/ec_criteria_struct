'INC'

'-  patients with one or more events of hip dislocation after a primary THA'

'-  patients with eq(val("one"), op(GTEQ)) events of cond("hip dislocation") after a mod("primary") proc("THA")'

seq(
    cond("hip dislocation"),
    after(
        proc("THA")
            .mod("primary")
    )
)