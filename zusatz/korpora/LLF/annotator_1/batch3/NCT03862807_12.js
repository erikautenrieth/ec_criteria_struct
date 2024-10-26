'EXC'

'-  Has infection with hepatitis B , hepatitis C or human immunodeficiency virus ( HIV )'

'-  Has cond("infection") with cond("hepatitis B") , cond("hepatitis C") or cond("human immunodeficiency virus") ( cond("HIV") )'

cond("infection")
    .caused_by(
        cond("hepatitis B"), 
        cond("hepatitis C"),
        cond("human immunodeficiency virus")
            .equiv(
                cond("HIV")
            )
    )