from database import get_all_articles
from cluster import cluster_articles

articles = get_all_articles()

labels = cluster_articles(articles)

for article, label in zip(articles, labels):
    print(f"[Cluster {label}] {article.title}")