'EXC'

'-  patients with severe infections , severe heart disease and liver disease , malignancy , autoimmune disorders , severe malnutrition , or clinical conditions requiring oral nutrition supplements ;'

'-  patients with severity(SEVERE) cond("infections") , severity(SEVERE) cond("heart disease") and cond("liver disease") , cond("malignancy") , cond("autoimmune disorders") , severity(SEVERE) cond("malnutrition") , or clinical cond() indication() drug("oral nutrition supplements") ;'

union(
    cond("infections")
        .severity(SEVERE),
    union(
        cond("heart disease"),
        cond("liver disease")
    )
        .severity(SEVERE),
    cond("malignancy"),
    cond("autoimmune disorders"),
    cond("malnutrition")
        .severity(SEVERE),
    indication(
        drug("oral nutrition supplements")
            .for(
                cond()
            )
    )
)
