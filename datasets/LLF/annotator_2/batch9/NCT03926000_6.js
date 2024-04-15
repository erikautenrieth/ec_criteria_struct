'EXC'

'-  Patients with chronic use of analgesics and / or sedatives .'

'-  Patients with chronic() use of drug("analgesics") and / or drug("sedatives") .'

union(
    drug("analgesics"),
    drug("sedatives")
)
    .chronic()