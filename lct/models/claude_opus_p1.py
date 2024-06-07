import anthropic

client = anthropic.Anthropic(
    # defaults to os.environ.get("ANTHROPIC_API_KEY")
    api_key="my_api_key",
)
message = client.messages.create(
    model="claude-3-opus-20240229",
    max_tokens=1000,
    temperature=0,
    system="Precisely copy any email addresses from the following text and then write them, one per line. "
           "Only write an email address if it's precisely spelled out in the input text. "
           "If there are no email addresses in the text, write \"N/A\".  Do not say anything else.",
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Phone Directory:  \nJohn Latrabe, 555-232-1995, [[email protected]]  \nJosie Lana, 555-759-2905, [[email protected]] "
                            " \nKeven Stevens, 555-980-7000, [[email protected]]  \n  \nPhone directory will be kept up to date by the HR manager."
                }
            ]
        }
    ]
)
print(message.content)

