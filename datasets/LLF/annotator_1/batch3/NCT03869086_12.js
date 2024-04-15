'EXC'

'-  Prescribed hypoglycaemic , anti - hypertensive , vasodilator or hormone replacement therapy ( HRT ) medication .'

'-  Prescribed drug("hypoglycaemic") , drug("anti - hypertensive") , drug("vasodilator") or proc("hormone replacement therapy") ( proc("HRT") ) drug() .'

union(
    drug("hypoglycaemic"), 
    drug("anti - hypertensive"), 
    drug("vasodilator"), 
    proc("hormone replacement therapy")
        .equiv(
            proc("HRT")
        )
)
   