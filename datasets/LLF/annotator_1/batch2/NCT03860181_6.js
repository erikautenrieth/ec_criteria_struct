'INC'

'-  They have a unique , identifying tattoo or skin marking within 2 inches of intended site of surgical incision'

'-  They have a unique , identifying cond("tattoo") or cond("skin marking") mod("within 2 inches") of intended site of surgical incision'

union(
    cond("tattoo"), 
    cond("skin marking")
)
.mod("within 2 inches")