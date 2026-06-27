from extractor import extract_article_content

url = input("Paste article URL: ")

content = extract_article_content(url)

print("\n")
print("=" * 50)
print("CONTENT LENGTH:", len(content))
print("=" * 50)

print(content[:1500])