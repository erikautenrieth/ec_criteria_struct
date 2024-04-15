'INC'

'-  Individuals who have undergone clinical and / or research genetic evaluation , found to have or not have a germline genetic variant ( pathogenic , likely pathogenic , variant of uncertain / unknown significance , likely benign ) .'

'-  Individuals who have undergone mod("clinical") and / or mod("research") proc("genetic evaluation") , found to have or not have a cond("germline genetic variant") ( mod("pathogenic") , possible() mod("pathogenic") , variant of uncertain / unknown significance , possible() mod("benign") ) .'

union(
    cond("germline genetic variant")
        .mod("pathogenic"),
    cond("germline genetic variant")
        .possible()    
        .mod("pathogenic"),
    cond("germline genetic variant")
        .possible()
        .mod("benign")
)
    .found_by(
        proc("genetic evaluation")
            .mod("clinical")
            .mod("research")
    )