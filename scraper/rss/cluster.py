from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import DBSCAN


def cluster_articles(articles):
    """
    Cluster articles based on title + content.
    """

    documents = []

    for article in articles:
        text = article.title + " " + article.content
        documents.append(text)

    # Convert text into numbers
    vectorizer = TfidfVectorizer(
        stop_words="english"
    )

    X = vectorizer.fit_transform(documents)

    # Cluster similar articles
    clustering = DBSCAN(
        eps=0.7,
        min_samples=1,
        metric="cosine"
    )

    labels = clustering.fit_predict(X)

    return labels