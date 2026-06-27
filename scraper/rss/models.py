from dataclasses import dataclass


@dataclass
class ArticleData:
    title: str
    summary: str
    url: str
    source: str
    published: str
    content: str = ""