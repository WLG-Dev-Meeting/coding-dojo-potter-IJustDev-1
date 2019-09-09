"""
Used for parse strings like "AAABBB" into objects like
{"a": 3, "b": 3}
"""
book_string = input("[*] Enter book string... ")
book_response = {}

for letter in book_string:
    try:
        book_response[letter] += 1
    except:
        book_response[letter] = 1

print(book_response)
