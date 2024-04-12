'EXC'

'3.  Evidence of decompensated liver cirrhosis or heart failure .'

'3.  Evidence of mod("decompensated liver") cond("cirrhosis") or cond("heart failure") .'

union(
    cond("cirrhosis")
        .mod("decompensated liver"),
    cond("heart failure")
)