'INC'

'-  all patients who are assigned to a clinically indicated chest X - ray by the emergency department of Vienna General Hospital'

'-  all patients who are assigned to a clinically indication() mod("chest") proc("X - ray") by the loc(unit("emergency department")) of loc(hosp("Vienna General Hospital"))'

indication(
    proc("chest X - ray")
        .loc(unit("emergency department"))
        .loc(hosp("Vienna General Hospital"))
)