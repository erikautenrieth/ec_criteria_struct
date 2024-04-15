'EXC'

'-  patients with uncontrollable oral leaks with MPV or episode of acute respiratory infection during the trials'

'-  patients with change() cond("oral leaks") with proc("MPV") or episode of acute() cond("respiratory infection") during the trials'

union(
    intersect(
        cond("oral leaks")
            .change(),
        proc("MPV")
    ),
    cond("respiratory infection")
        .acute()
)