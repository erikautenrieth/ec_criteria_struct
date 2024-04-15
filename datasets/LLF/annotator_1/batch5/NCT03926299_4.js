'EXC'

'-  Concomitant steroid , calcineurin inhibitor or any other topical or systemic treatment for LS'

'-  mod("Concomitant") drug("steroid") , drug("calcineurin inhibitor") or any other mod("topical") or mod("systemic") proc() for cond("LS")'

union(
    drug("steroid"), 
    drug("calcineurin inhibitor"), 
    proc()
        .mod("topical")
        .mod("systemic")
        .for(
            cond("LS")
        )
)