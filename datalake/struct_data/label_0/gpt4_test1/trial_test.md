## ClinicalTrials.gov ID
NCT00216060

## Eligibility Criteria

### Inclusion Criteria

- Histologically or cytologically confirmed adenocarcinoma of the prostate with metastatic bone disease (confirmed by CT, MRI, or bone scan).
- Plans to star[output.json](output.json)t or be < 30 days from beginning androgen deprivation therapy.
- Patients with lymph node or visceral metastases only are not eligible.
- Patients may receive palliative radiation therapy at the investigator's discretion during the first 4 weeks of beginning protocol therapy.

### Exclusion Criteria

- No neuroendocrine, small cell, or transitional cell cancer of the prostate.
- No abnormal bone metabolism (i.e., Paget's disease, untreated hyperthyroidism, untreated hyperprolactinemia, untreated Cushing's disease).
- No use of calcitonin within 14 days before being registered for protocol therapy or any previous use of bisphosphonates.
- No major surgery within 4 weeks of registration to protocol therapy.
- No adjuvant chemotherapy within 6 months of registration to protocol therapy.
- No previous chemotherapy for metastatic disease.
- No hormonal therapy in the adjuvant setting within 12 months of registration to protocol therapy; previous hormonal therapy must not have exceeded 6 months.
- No prior history of malignancy in the past 5 years with the exception of basal cell and squamous cell carcinoma of the skin.
- No history of allergy or drug reactions to bisphosphonates.


### Token
- 194


### GPT4 Output in KNF

Prostate_Cancer AND Adenocarcinoma AND (Bone_Metastasis AND (Androgen_Deprivation_Therapy OR Ongoing_Treatment))
AND (Radiation_Therapy OR NOT Exclusion_Criterion) AND NOT (Cancer_Type_Exclusion OR Bone_Metabolism_Disorder OR Medication_Exclusion OR Surgery_Exclusion OR Chemotherapy_Exclusion OR Hormonal_Therapy_Exclusion OR Malignancy_History_Exclusion OR Allergy_Exclusion)



### Custom GPT (Clinical Trial Assistant)

(367651003 ∧ 95320005 ∧ 288322008 ∧ ¬94222008 ∧ ¬126851005) ∧ (¬128462008 ∧ ¬254637007 ∧ ¬25370001 ∧ ¬32958008 ∧ ¬40930008 ∧ ¬2429009 ∧ ¬190828008 ∧ ¬372687004 ∧ ¬387517004 ∧ ¬419199007)

    367651003: Adenokarzinom der Prostata
    95320005: Metastatische Knochenerkrankung
    288322008: Androgendeprivationstherapie
    94222008: Lymphknotenmetastasen
    126851005: Viszerale Metastasen
    108290001: Palliative Strahlentherapie (optional)
    128462008: Neuroendokriner Krebs
    254637007: Kleinzelliger Krebs
    25370001: Übergangszellkarzinom
    32958008: Paget-Krankheit
    40930008: Unbehandelter Hyperthyreoidismus
    2429009: Unbehandelte Hyperprolaktinämie
    190828008: Unbehandeltes Cushing-Syndrom
    372687004: Calcitonin
    387517004: Bisphosphonate
    419199007: Allergie gegen Bisphosphonate

### Nfdi4health Clinical Trial Example

https://csh.nfdi4health.de/resource/DRKS00029166

Eligibility criteria: Minimum age
: 18 Years
Eligibility criteria: Maximum age: 99 Years
Eligible gender: Diverse, Female, Male

Inclusion criteria
: All “Check-up 35+” patients will be included in the analysis in the database from 01 Oct 2021 – 30 Sep 2022. Hepatitis B (HBsAg) and C (anti-HCV) screenings within the “Check-Up 35+” are identified by the code GOP 01865. The codes GOP 01866 and 01867 are used for the analysis of HBV-DNA and HCV-RNA (PCR) in case of positive HBsAg and anti-HCV screening results, respectively.

Exclusion criteria
: No specific exclusion criteria


## Output Custom gpt

(Age ≥ 18) AND (Age ≤ 99) AND ((Gender = '840546002' OR '248152002' OR '446151000124109')) AND (ParticipationDate ≥ '2021-10-01') AND (ParticipationDate ≤ '2022-09-30') AND (HBsAgScreening = '441829007' WITH Code 'GOP 01865') AND (Anti-HCVScreening = '165816005' WITH Code 'GOP 01865') AND (((HBsAgPositive = '165769009') → (HBV_DNAAnalysis = '62480006' WITH Code 'GOP 01866')) AND ((Anti-HCVPositive = '407569009') → (HCV_RNAAnalysis = '370143000' WITH Code 'GOP 01867')))
