'EXC'

'2.  Hepatocellular carcinoma or other malignancy ;'

'2.  cond("Hepatocellular carcinoma") or other cond("malignancy") ;'

union(
    cond("Hepatocellular carcinoma"),
    cond("malignancy")
)