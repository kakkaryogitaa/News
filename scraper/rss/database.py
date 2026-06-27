import os
import psycopg2
from models import ArticleData

# Use same DB as Prisma backend
DATABASE_URL = os.getenv("DATABASE_URL")


def create_connection():
    if not DATABASE_URL:
        raise Exception("DATABASE_URL not set in environment variables")

    return psycopg2.connect(DATABASE_URL)


def create_table():
    conn = create_connection()
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS articles (
        id SERIAL PRIMARY KEY,
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
        (title, summary, url, source, published, content)
        VALUES (%s, %s, %s, %s, %s, %s)
        ON CONFLICT (url) DO NOTHING
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

    except Exception as e:
        print(f"❌ Insert error: {e}")

    finally:
        conn.close()


def get_all_articles():
    conn = create_connection()
    cursor = conn.cursor()

    cursor.execute("""
    SELECT title, summary, url, source, published, content
    FROM articles
    ORDER BY id DESC
    """)

    rows = cursor.fetchall()
    conn.close()

    return [
        ArticleData(
            title=row[0],
            summary=row[1],
            url=row[2],
            source=row[3],
            published=row[4],
            content=row[5]
        )
        for row in rows
    ]
