'EXC'

'-  anticipated significant bleeding ( anti - platelet agents ) , suggesting the use of blood - derived products during the operation and afterward'

'-  anticipated severity(SEVERE) obs("bleeding") ( drug("anti - platelet agents") ) , indication() the use of proc("blood - derived products") during the proc("operation") and afterward'

seq(
    indication(
        proc("blood - derived products")
    )
    .for(
        obs("bleeding")
            .severity(SEVERE)
            .equiv(
                drug("anti - platelet agents")
            )
    ),
    during(
        proc("operation")
    )
)