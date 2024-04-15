'EXC'

'1.  Comorbid Bipolar Disorder , Schizophrenia , Anorexia or Bulimia Nervosa , or Obsessive - Compulsive Disorder'

'1.  Comorbid cond("Bipolar Disorder") , cond("Schizophrenia") , cond("Anorexia") or cond("Bulimia Nervosa") , or cond("Obsessive - Compulsive Disorder")'

union(
    cond("Bipolar Disorder"),
    cond("Schizophrenia"),
    cond("Anorexia"),
    cond("Bulimia Nervosa"),
    cond("Obsessive - Compulsive Disorder")
)