'EXC'

'-  Self - disclosed as pregnant or breast - feeding or planning on becoming pregnant during the study duration .'

'-  Self - disclosed as cond("pregnant") or cond("breast - feeding") or planning on becoming pregnant during the study duration .'

union(
    cond("pregnant"),
    cond("breast - feeding")
)