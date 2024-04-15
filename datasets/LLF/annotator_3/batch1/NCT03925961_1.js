'INC'

'-  General surgical patients who will undergo same - day laparoscopic ventral hernia , inguinal hernia , and gallbladder surgery at Howard County General Hospital with the general surgery practice at Johns Hopkins Community Physicians .'

'-  General surgical patients who eq(temporal_per(FUTURE)) mod("same - day") proc("laparoscopic ventral hernia") , proc("inguinal hernia") , and proc("gallbladder surgery") at loc(hosp("Howard County General Hospital")) with the prov("general surgery practice") at Johns Hopkins Community Physicians .'

union(
    proc("laparoscopic ventral hernia"),
    proc("inguinal hernia"),
    proc("gallbladder surgery")
)
    .temporality(
        eq(temporal_per(FUTURE))
    )
    .mod("same - day")
    .loc(hosp("Howard County General Hospital"))
    .prov("general surgery practice")