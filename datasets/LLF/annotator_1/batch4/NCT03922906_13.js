'EXC'

'8.  Patients taking anticoagulants drugs ( excluding aspirin ) or dual antiplatelet therapy'

'8.  Patients eq(temporal_per(PRESENT)) drug("anticoagulants drugs") ( except() drug("aspirin") ) or mod("dual") proc("antiplatelet therapy")'

union(
    drug("anticoagulants drugs")
        .except(
            drug("aspirin")
        ),
    proc("antiplatelet therapy")
        .mod("dual")
)
.temporality(
    eq(temporal_per(PRESENT))
)