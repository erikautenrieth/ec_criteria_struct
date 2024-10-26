'EXC'

'-  person who experiences any of the following during the ophthalmological examination : severe or proliferating diabetic retinopathy , intra - vitreal hemorrhage , tractional retinal detachment , subretinal or retrohyaloidal hematoma .'

'-  person who experiences any of criteria() during the proc("ophthalmological examination") : severity(SEVERE) or mod("proliferating") cond("diabetic retinopathy") , mod("intra - vitreal") cond("hemorrhage") , cond("tractional retinal detachment") , mod("subretinal") or mod("retrohyaloidal") cond("hematoma") .'

seq(
    criteria(
        cond("diabetic retinopathy")
            .severity(SEVERE)
            .mod("proliferating"),
        cond("hemorrhage")
            .mod("intra - vitreal"),
        cond("tractional retinal detachment"),
        cond("hematoma")
            .mod("subretinal")
            .mod("retrohyaloidal")
    ),
    during(
        proc("ophthalmological examination")
    )
)