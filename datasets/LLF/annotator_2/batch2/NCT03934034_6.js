'EXC'

'2.  The causative agent of NTM pulmonary disease is none of M .  avium complex , M .  abscessus subspecies abscessus , M .  abscessus subspecies massiliense , or M .  kansasii .'

'2.  The org() of cond("NTM pulmonary disease") is except() org("M .  avium complex") , org("M .  abscessus subspecies abscessus") , org("M .  abscessus subspecies massiliense") , or org("M .  kansasii") .'

cond("NTM pulmonary disease")
    .caused_by(
        org()
            .except(
                org("M .  avium complex"),
                org("M .  abscessus subspecies abscessus"),
                org("M .  abscessus subspecies massiliense"),
                org("M .  kansasii")
            )
    )