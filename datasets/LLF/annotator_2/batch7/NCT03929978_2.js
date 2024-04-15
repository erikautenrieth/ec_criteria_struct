'INC'

'1.  Have a colostomy , ileostomy ( jejunostomy ) , loop stoma , or two stomas placed closely together'

'1.  Have a proc("colostomy") , proc("ileostomy") ( proc("jejunostomy") ) , proc("loop stoma") , or eq(val("two")) proc("stomas") placed closely together'

union(
    proc("colostomy"),
    proc("ileostomy")
        .equiv(
            proc("jejunostomy")
        ),
    proc("loop stoma"),
    proc("stomas")
        .num_filter(
            eq(val("two")) 
        )
)