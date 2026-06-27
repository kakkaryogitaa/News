import sqlite3
from models import ArticleData

DATABASE_NAME = "news.db"


def create_connection():
    return sqlite3.connect(DATABASE_NAME)


def create_table():
    conn = create_connection()
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        summary TEXT,
        url TEXT UNIQUE,
        source TEXT,
        published TEXT,
        content TEXT
    )
    """)

    conn.commit()
    conn.close()


def insert_article(article):
    conn = create_connection()
    cursor = conn.cursor()

    try:
        cursor.execute("""
        INSERT INTO articles
        (
            title,
            summary,
            url,
            source,
            published,
            content
        )
        VALUES (?, ?, ?, ?, ?, ?)
        """,
        (
            article.title,
            article.summary,
            article.url,
            article.source,
            article.published,
            article.content
        ))

        conn.commit()
        print(f"✅ Saved: {article.title}")

    except sqlite3.IntegrityError:
        print(f"⚠️ Duplicate: {article.title}")

    conn.close()


def get_all_articles():
    conn = create_connection()
    cursor = conn.cursor()

    cursor.execute("""
    SELECT
        title,
        summary,
        url,
        source,
        published,
        content
    FROM articles
    """)

    rows = cursor.fetchall()
    conn.close()

    articles = []

    for row in rows:
        article = ArticleData(
            title=row[0],
            summary=row[1],
            url=row[2],
            source=row[3],
            published=row[4],
            content=row[5]
        )

        articles.append(article)

    return articles