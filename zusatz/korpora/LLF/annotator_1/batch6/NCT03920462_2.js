'INC'

'-  Volunteer without a contraindication to moderate physical activity or cycling ( acute coronary artery disease less than 2 years old , musculoskeletal problem of the spine or lower limbs incompatible with cycling ) .'

'-  Volunteer neg() a contraindication() to pol(MEDIUM) social_habit("physical activity") or social_habit("cycling") ( acute() cond("coronary artery disease") eq(op(LT), val("2"), temporal_unit(YEAR)) old , cond("musculoskeletal problem") of the mod("spine") or mod("lower limbs") incompatible with cycling ) .'

neg(
    contraindication(
        social_habit("physical activity")
            .pol(MEDIUM),
        social_habit("cycling")
    )
    .equiv(
        cond("coronary artery disease")
            .acute()
            .duration(
                eq(op(LT), val("2"), temporal_unit(YEAR))
            ),
        cond("musculoskeletal problem")
            .mod("spine")
            .mod("lower limbs")
    )
)