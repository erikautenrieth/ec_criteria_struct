'EXC'

'-  Pregnant women are excluded from this study because EXPAREL has the potential for teratogenic or abortifacient effects .  Because there is an unknown but potential risk for adverse events in nursing infants secondary to treatment of the mother with EXPAREL , breastfeeding should be discontinued if the mother is treated with EXPAREL .'

'-  cond("Pregnant") female() are neg() from this study because EXPAREL has the potential for teratogenic or abortifacient effects .  Because there is an unknown but potential risk for adverse events in nursing infants secondary to treatment of the mother with EXPAREL , breastfeeding should be discontinued if the mother is treated with EXPAREL .'

neg(
    intersect(
        cond("Pregnant"),
        female()
    )
)