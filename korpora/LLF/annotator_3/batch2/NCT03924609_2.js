'INC'

'B .  Histologically confirmed breast cancer patients , fulfilling any of the following : 1 . Multiple bone metastases indicated by bone scan , 2 . Bone scan positive , and proven by other imaging examinations , including computed tomography (CT) , magnetic resonance imaging (MRI) and X - ray , 3 . Bone scan positive, with clinical symptoms , including bone pain , pathologic fracture , spinal cord compression and so on , 4 . Bone metastases indicated by PET - CT , 5 . Histologically proven bone metastases'

'B .  proc("Histologically") confirmed cond("breast cancer") patients , fulfilling any of criteria() : 1 . eq(op(GT)) obs("bone metastases") indicated by proc("bone scan") , 2 . proc("Bone scan") pol(POSITIVE) , and proven by other proc("imaging examinations") , including proc("computed tomography") ( proc("CT") ) , proc("magnetic resonance imaging") ( proc("MRI") ) and proc("X - ray") , 3 . proc("Bone scan") pol(POSITIVE) , with clinical cond("symptoms") , including obs("bone pain") , cond("pathologic fracture") , cond("spinal cord compression") and so on , 4 . obs("Bone metastases") indicated by proc("PET - CT") , 5 . proc("Histologically") proven obs("bone metastases")'

intersect(
    cond("breast cancer")
        .found_by(
            proc("Histologically")
        ),
    criteria(
        obs("bone metastases")
            .min_count(
                eq(op(GT))
            )
            .found_by(
                proc("bone scan")
            ),
        proc("Bone scan")
            .pol(POSITIVE)
            .found_by(
                proc("imaging examinations")
                    .equiv(
                        proc("computed tomography")
                            .equiv(
                                proc("CT")
                            ),
                        proc("magnetic resonance imaging")
                            .equiv(
                                proc("MRI")
                            ),
                        proc("X - ray")
                    )
            ),
        intersect(
            proc("Bone scan")
                .pol(POSITIVE),
            cond("symptoms")
                .equiv(
                    obs("bone pain"),
                    cond("pathologic fracture"),
                    cond("spinal cord compression")
                )
        ),
        obs("Bone metastases")
            .found_by(
                proc("PET - CT")
            ),
        obs("bone metastases")
            .found_by(
                proc("Histologically")
            )
    )
)
