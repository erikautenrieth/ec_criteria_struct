'EXC'

'-  Unstable medical , psychiatric , or substance abuse disorder that may interfere with continuation in the study ,'

'-  change() mod("medical") , mod("psychiatric") , or mod("substance abuse") cond("disorder") that may interfere with continuation in the study ,'

union(
    intersect(
        cond("disorder"),
        mod("medical")
    ),
    mod("psychiatric"),
    mod("substance abuse")
)

