'INC'

'3.  Bone scan positive , with clinical symptoms , including bone pain , pathologic fracture , spinal cord compression and so on .'

'3.  proc("Bone scan") pol(POSITIVE) , with clinical cond("symptoms") , including mod("bone") obs("pain") , cond("pathologic fracture") , cond("spinal cord compression") and so on .'

intersect(
    proc("Bone scan")
        .pol(POSITIVE), 
    cond("symptoms")
        .equiv(
            obs("pain"), 
            cond("pathologic fracture"), 
            cond("spinal cord compression")
        )
)