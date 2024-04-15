'EXC'

'-  Systemic diseases requiring long - term antibiotic use , phenytoin , cyclosporin , anti - inflammatory drugs , bisphosphonates , systemic corticosteroids or calcium channel blockers .'

'-  cond("Systemic diseases") indication() mod("long - term") drug("antibiotic") use , drug("phenytoin") , drug("cyclosporin") , drug("anti - inflammatory drugs") , drug("bisphosphonates") , drug("systemic corticosteroids") or drug("calcium channel blockers") .'

indication(
    union(
        drug("antibiotic")
            .mod("long - term"),
        drug("phenytoin"),
        drug("anti - inflammatory drugs"),
        drug("bisphosphonates"),
        drug("systemic corticosteroids"),
        drug("calcium channel blockers")
    )
        .for(
            cond("Systemic diseases")
        )
)