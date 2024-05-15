from transformers import AutoModel, AutoTokenizer, AutoConfig

tokenizer= AutoTokenizer.from_pretrained('UFNLP/gatortron-large')
config=AutoConfig.from_pretrained('UFNLP/gatortron-large')
mymodel=AutoModel.from_pretrained('UFNLP/gatortron-large')

encoded_input=tokenizer("Bone scan:  Negative for distant metastasis.", return_tensors="pt")
encoded_output = mymodel(**encoded_input)
print (encoded_output)
