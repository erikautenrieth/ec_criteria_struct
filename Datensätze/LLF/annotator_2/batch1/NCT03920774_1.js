'INC'

'-  Patients of any age with a diagnosis of familial dysautonomia ( FD ) with molecular confirmation of the IKBKAP mutation .'

'-  Patients of any age with a diagnosis of cond("familial dysautonomia") ( cond("FD") ) with molecular confirmation of the cond("IKBKAP mutation") .'

intersect(
    cond("familial dysautonomia")
        .equiv(
            cond("FD")
        ),
    cond("IKBKAP mutation")
)