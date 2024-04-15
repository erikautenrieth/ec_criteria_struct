'EXC'

'3.  end - stage disease or serious illness that prohibits participation ( e . g .  end - stage renal disease or class IV congestive heart failure ) ;'

'3.  mod("end - stage") cond() or severity(SEVERE) cond("illness") that prohibits participation ( e . g .  mod("end - stage") cond("renal disease") or eq(unit("class"), val("IV")) cond("congestive heart failure") ) ;'

union(
    cond()
        .mod("end - stage"),
    cond("illness")
        .severity(SEVERE)
)
    .equiv(
        cond("renal disease")
            .mod("end - stage"),
        cond("congestive heart failure")
            .num_filter(
                eq(unit("class"), val("IV"))
            )
    )