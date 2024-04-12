'INC'

'2.  The causative agent of NTM pulmonary disease includes : M .  avium complex , or M .  abscessus subspecies abscessus , or M .  abscessus subspecies massiliense , or M .  kansasii .'

'2.  The org() of cond("NTM pulmonary disease") includes : org("M .  avium complex") , or org("M .  abscessus subspecies abscessus") , or org("M .  abscessus subspecies massiliense") , or org("M .  kansasii") .'

cond("NTM pulmonary disease")
    .caused_by(
        org()
            .equiv(
                org("M .  avium complex"),
                org("M .  abscessus subspecies abscessus"),
                org("M .  abscessus subspecies massiliense"),
                org("M .  kansasii")
            )
    )