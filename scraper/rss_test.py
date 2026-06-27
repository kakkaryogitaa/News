import feedparser

feed = feedparser.parse(
    "https://feeds.bbci.co.uk/news/rss.xml"
)

print(feed.entries[0].title)