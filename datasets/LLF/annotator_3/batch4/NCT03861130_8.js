'INC'

'5.  Cervical lymphadenopathy ( > 1.5 cm diameter ) , usually unilateral . Patients meeting not all of these criteria may meet the criteria for atypical Kawasaki disease , ie .  if they have fever and two or three of the above criteria and elevation of CRP or echocardiographic evidence of coronary artery dilatation .'

'5.  cond("Cervical lymphadenopathy") ( eq(op(GT), val("1.5"), unit("cm")) measurement("diameter") ) , usually mod("unilateral") . Patients meeting not all of these criteria may meet the criteria for atypical cond("Kawasaki disease") , ie .  if they have obs("fever") and eq(val("two"), val("three")) of criteria() and pol(HIGH) of lab("CRP") or proc("echocardiographic evidence") of cond("coronary artery dilatation") .'

union(
    cond("Cervical lymphadenopathy")
        .equiv(
            measurement("diameter")
                .num_filter(
                    eq(op(GT), val("1.5"), unit("cm"))
                )
        )
        .mod("unilateral"),
    cond("Kawasaki disease")
        .equiv(
            intersect(
                obs("fever"),
                criteria()
                    .min_count(
                        eq(val("two"), val("three"))
                    ),
                union(
                    lab("CRP")
                        .pol(HIGH),
                    cond("coronary artery dilatation")
                        .found_by(
                            proc("echocardiographic evidence")
                        )
                )
            )
        )

)

