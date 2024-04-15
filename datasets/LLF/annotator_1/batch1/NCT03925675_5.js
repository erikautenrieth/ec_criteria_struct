'EXC'

'1.  Patient diagnosis with glioma but before surgery , external beam radiation and / or chemotherapy with temozolamide .'

'1.  Patient diagnosis with cond("glioma") but before proc("surgery") , proc("external beam radiation") and / or proc("chemotherapy") with drug("temozolamide") .'

union(
    seq(
        cond("glioma"),
        before(
            proc("surgery")
        )
    ),
    proc("external beam radiation"),
    seq(
        proc("chemotherapy"),
        during(
            drug("temozolamide")
        )
    )
)
