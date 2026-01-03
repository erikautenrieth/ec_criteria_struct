'EXC'

'-  Pregnancy or breastfeeding .  Women must use adequate contraception during the study .'

'-  cond("Pregnancy") or cond("breastfeeding") .  female() must use adequate proc("contraception") during the study .'

intersect(
    union(
        cond("Pregnancy"),
        cond("breastfeeding")
    ),
    female(),
    proc("contraception") 
)