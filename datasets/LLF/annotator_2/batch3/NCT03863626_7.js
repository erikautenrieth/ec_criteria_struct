'EXC'

'-  Cardiogenic shock or hemodynamic instability judged by the treating physician to be unsuitable to participate .'

'-  cond("Cardiogenic shock") or cond("hemodynamic") change() judged by the treating physician to be unsuitable to participate .'

union(
    cond("Cardiogenic shock"),
    cond("hemodynamic")
)
    .change()