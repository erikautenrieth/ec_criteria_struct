'INC'

'-  Women called back from a screening mammography by either FFDM or tomosynthesis with soft tissue abnormalities including masses , asymmetries , focal asymmetries or architectural distortion with or without calcifications .  Patients will be questioned regarding the possibility of pregnancy and will need a negative pregnancy test prior the study intervention .'

'-  female() called back from a proc("screening mammography") by either proc("FFDM") or proc("tomosynthesis") with cond("soft tissue abnormalities") including obs("masses") , cond("asymmetries") , cond("focal asymmetries") or cond("architectural distortion") with or without calcifications .  Patients will be questioned regarding the possibility of pregnancy and will need a negative pregnancy test prior the study intervention .'

intersect(
    female(),
    proc("screening mammography")
        .found_by(
            proc("FFDM"),
            proc("tomosynthesis")
        ),
    cond("soft tissue abnormalities")
        .equiv(
            obs("masses"),
            cond("asymmetries"),
            cond("focal asymmetries"),
            cond("architectural distortion")
        )
)
