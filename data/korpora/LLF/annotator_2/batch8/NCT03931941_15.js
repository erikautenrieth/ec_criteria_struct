'EXC'

'8.  Pregnant , breastfeeding , or intends to become pregnant during study participation .'

'8.  cond("Pregnant") , cond("breastfeeding") , or intends to become pregnant during study participation .'

union(
    cond("Pregnant"),
    cond("breastfeeding")
)