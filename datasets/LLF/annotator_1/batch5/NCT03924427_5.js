'INC'

'Additional protocol - specified inclusion criteria apply for subjects with psoriatic arthritis , erythrodermic psoriasis , or generalized pustular psoriasis'

'Additional protocol - specified inclusion criteria apply for subjects with cond("psoriatic arthritis") , cond("erythrodermic psoriasis") , or cond("generalized pustular psoriasis")'

union(
    cond("psoriatic arthritis"), 
    cond("erythrodermic psoriasis"), 
    cond("generalized pustular psoriasis")
)