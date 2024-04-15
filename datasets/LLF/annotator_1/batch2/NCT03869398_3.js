'EXC'

'-  partial thyroidectomy , lobectomy , or concurrent parathyroidectomy .'

'-  proc("partial thyroidectomy") , proc("lobectomy") , or mod("concurrent") proc("parathyroidectomy") .'

union(
    proc("partial thyroidectomy"), 
    proc("lobectomy"), 
    proc("parathyroidectomy")
        .mod("concurrent")
)