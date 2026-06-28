#  News Pulse — Topic Clustered News Timeline

News Pulse is a full-stack system that ingests live news from multiple RSS feeds, extracts full article content, groups related articles into topic-based clusters, and visualizes them as an interactive timeline.

The project focuses on real-world engineering challenges such as inconsistent data ingestion, text extraction from web sources, lightweight NLP-based clustering, and API-driven visualization.

---

##  Live Links

-  Frontend: https://news-bay-delta.vercel.app/
-  Backend API: https://news-a5pv.onrender.com
-  Video Walkthrough:  

---

##  Tech Stack

**Python (Data Pipeline)**
- RSS feed ingestion
- Article extraction (full content scraping)
- Text cleaning & normalization
- Topic clustering (keyword-overlap approach)
- Duplicate prevention logic

**Node.js (Backend API)**
- Express.js REST APIs
- Cluster + timeline data serving
- Python pipeline trigger (subprocess)
- Ingestion job tracking system

**Next.js  (Frontend)**
- Interactive timeline visualization
- Cluster detail explorer
- Source filtering system
- Refresh + polling mechanism

**Database**
- PostgreSQL 

## 📡 RSS Sources Used

This project uses real-world RSS feeds:

- BBC News — https://feeds.bbci.co.uk/news/rss.xml  
- NPR News — https://feeds.npr.org/1001/rss.xml  
- Al Jazeera — https://www.aljazeera.com/xml/rss/all.xml

---


---

##  Python Pipeline

### Responsibilities

- Fetch articles from multiple RSS feeds
- Normalize inconsistent feed structures
- Extract full article text using:
  - newspaper3k
  - trafilatura
  - BeautifulSoup fallback
- Handle missing or malformed articles gracefully
- Prevent duplicate ingestion across runs

---

##  Topic Grouping Approach

###  Method Used: Keyword Overlap Clustering

This project uses a simple but effective keyword-overlap based clustering approach.

###  How it works:

1. Extract text from:
   - headline
   - summary
   - full article body (when available)

2. Preprocess text:
   - lowercase conversion
   - stopword removal
   - punctuation removal

3. Convert articles into keyword sets

4. Compute similarity:
   - Compare overlap between keyword sets

5. Grouping rule:
   - If two articles share **3–4 or more meaningful keywords**, they are grouped into the same cluster

6. Cluster labeling:
   - Most frequent shared keywords in the cluster
   - OR dominant repeated terms in grouped articles

---

###  Why this approach was chosen:

- Lightweight and fast
- Works well with noisy RSS data
- No dependency on heavy ML models
- Easy to explain and debug

---

###  Limitation:

- Does not understand semantic similarity (e.g., synonyms like "election" vs "vote")
- Sensitive to threshold tuning
- Less accurate for very short headlines

---

##  Node.js Backend API

###  Endpoints

### GET `/clusters`
Returns all clusters with:
- clusterId
- label
- article count
- time range (start → end)

---

### GET `/clusters/:id`
Returns detailed cluster information:
- articles sorted chronologically
- headline
- source
- published date
- original URL

---

### GET `/timeline`
Returns timeline-ready cluster data:

```json
[
  {
    "clusterId": "1",
    "label": "election senate bill",
    "start": "2026-06-25T10:00:00Z",
    "end": "2026-06-26T14:00:00Z",
    "articleCount": 6,
    "intensity": 0.75
  }





