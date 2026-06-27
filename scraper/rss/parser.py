# rss/parser.py

import feedparser
from models import ArticleData


def parse_feed(feed_name, feed_url):

    feed = feedparser.parse(feed_url)

    articles = []

    for entry in feed.entries:

        article = ArticleData(
            title=entry.get("title", ""),
            summary=entry.get("summary", ""),
            url=entry.get("link", ""),
            source=feed_name,
            published=entry.get("published", ""),
            content=""
        )

        articles.append(article)

    return articles