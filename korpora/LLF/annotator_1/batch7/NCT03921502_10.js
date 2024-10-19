'EXC'

'-  Inability to tolerate sedation of endoscopy , perforation of the digestive tract or other contraindication to endoscopy .'

'-  contraindication() proc("sedation of endoscopy") , proc("perforation of the digestive tract") or other contraindication() to proc("endoscopy") .'

union(
    contraindication(
        proc("sedation of endoscopy"),
        proc("perforation of the digestive tract")
    ), 
    contraindication(
        proc("endoscopy")
    )
)