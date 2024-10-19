'EXC'

'-  Fish meal intake more than 2 times a week'

'-  drug("Fish meal") intake eq(op(GT), val("2"), per(WEEK))'

drug("Fish meal")
    .temporality(
        eq(op(GT), val("2"), per(WEEK))
    )