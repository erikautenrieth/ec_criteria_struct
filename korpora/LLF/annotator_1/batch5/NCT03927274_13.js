'EXC'

'-  Diffuse subependymal or Cerebral Spinal Fluid ( CSF ) disease'

'-  cond("Diffuse subependymal") or cond("Cerebral Spinal Fluid") ( cond("CSF") ) cond()'

union(
    cond("Diffuse subependymal"),
    cond("Cerebral Spinal Fluid")
        .equiv(
            cond("CSF")
        )
)