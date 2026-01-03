'INC'

'-  patients of the CHU Brugmann ( adults ) and HUDERF ( pediatric ) Hospitals'

'-  patients of the loc(hosp("CHU Brugmann")) ( adult() ) and loc(hosp("HUDERF")) ( child() ) Hospitals'

union(
    intersect(
        adult(),
        enc()
            .loc(hosp("CHU Brugmann"))
    ),
    intersect(
        child(),
        enc()
            .loc(hosp("HUDERF"))
    )
)