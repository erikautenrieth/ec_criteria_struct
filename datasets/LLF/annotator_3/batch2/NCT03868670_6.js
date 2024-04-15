'INC'

'-  Premenopausal women must agree to use acceptable methods of birth control .'

'-  cond("Premenopausal") female() must agree to use acceptable methods of birth control .'

if_then(
    female(),
    cond("Premenopausal")
)
