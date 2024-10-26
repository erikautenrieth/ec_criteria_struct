'EXC'

'-  Subjects who no radiographic evidence of pleural disease or who are unwilling / unable to provide informed consent'

'-  Subjects who neg() proc("radiographic") evidence of cond("pleural disease") or who are unwilling / unable to provide informed consent'

neg(
    cond("pleural disease")
        .found_by(
            proc("radiographic")
        )
)