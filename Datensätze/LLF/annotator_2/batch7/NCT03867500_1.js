'INC'

'- Women and Men ( Women premenopausal )'

'- female() and male() ( female() cond("premenopausal") )'

intersect(
    union(
        female(),
        male() 
    ),    
    if_then(
        female(),
        cond("premenopausal")
    )
)
