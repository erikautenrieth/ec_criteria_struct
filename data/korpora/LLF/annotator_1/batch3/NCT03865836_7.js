'EXC'

'2.  Subject , if female , is pregnant or breastfeeding at screening .'

'2.  Subject , if female() , is cond("pregnant") or cond("breastfeeding") at screening .'

if_then(
    female(),
    union(
        cond("pregnant"),
        cond("breastfeeding")
    )
)