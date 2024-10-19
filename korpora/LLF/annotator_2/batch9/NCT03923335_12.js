'EXC'

'3.  have had hereditary colorectal cancer syndromes , including Familial adenomatous polyposis , mutyh ( MYH ) - associated polyposis , Peutz - Jeghers syndrome , Juvenile polyposis coli , phosphate and tension homology deleted on chromosome ten ( PTEN ) tumor - hamartoma syndromes , Lynch Syndrome , and Familial Colorectal Cancer Type X .'

'3.  have had mod("hereditary colorectal") cond("cancer syndromes") , including cond("Familial adenomatous polyposis") , mod("mutyh") ( mod("MYH") ) - associated cond("polyposis") , cond("Peutz - Jeghers syndrome") , cond("Juvenile polyposis coli") , cond("phosphate and tension homology deleted on chromosome ten") ( cond("PTEN") ) cond("tumor - hamartoma syndromes") , cond("Lynch Syndrome") , and cond("Familial Colorectal Cancer") mod("Type X") .'

cond("cancer syndromes")
    .mod("hereditary colorectal")
    .equiv(
        cond("Familial adenomatous polyposis"),
        cond("polyposis")
            .mod("mutyh")
            .equiv(
                mod("MYH")
            ),
        cond("Peutz - Jeghers syndrome"),
        cond("Juvenile polyposis coli"),
        cond("phosphate and tension homology deleted on chromosome ten")
            .equiv(
                cond("PTEN")
            ),
        cond("tumor - hamartoma syndromes"),
        cond("Lynch Syndrome"),
        cond("Familial Colorectal Cancer")
            .mod("Type X")
    )