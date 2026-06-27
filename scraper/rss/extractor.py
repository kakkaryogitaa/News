import requests
import trafilatura


def extract_article_content(url):
    try:
        response = requests.get(
            url,
            timeout=10,
            headers={
                "User-Agent": "Mozilla/5.0"
            }
        )

        downloaded = trafilatura.extract(
            response.text,
            include_comments=False,
            include_tables=False
        )

        return downloaded or ""

    except Exception as e:
        print(f"Extraction failed: {e}")
        return ""