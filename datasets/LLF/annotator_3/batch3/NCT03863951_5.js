'EXC'

'-  significant acute or severe illness such as infection , heart failure and tumor ,'

'-  acute() or severity(SEVERE) cond() such as cond("infection") , cond("heart failure") and cond("tumor") ,'

cond()
    .acute()
    .severity(SEVERE)
    .equiv(
        cond("infection"),
        cond("heart failure"),
        cond("tumor")
    )

