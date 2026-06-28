#  News Pulse — Topic Clustered News Timeline

News Pulse is a full-stack system that ingests live news from multiple RSS feeds, extracts full article content, groups related articles into topic-based clusters, and visualizes them as an interactive timeline.

The project focuses on real-world engineering challenges such as inconsistent data ingestion, text extraction from web sources, lightweight NLP-based clustering, and API-driven visualization.

---

##  Live Links

-  Frontend: https://news-bay-delta.vercel.app/
-  Backend API: https://news-a5pv.onrender.com
-  Video Walkthrough: https://drive.google.com/file/d/12UhhrT9rxWPyYuPCEv_DZ-g3PCb6ixhR/view?usp=sharing
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



 POST /ingest/trigger

Triggers Python pipeline:

Runs scraper + clustering as subprocess
Returns jobId
GET /ingest/status/:jobId

Returns job status:

pending
running
completed
failed
 Backend Features
Environment-based config (.env)
Proper error handling (400 / 404 / 500)
Subprocess-safe ingestion trigger
Clean separation between API and pipeline
 Frontend (Next.js)
 Features
 Interactive Timeline
Clusters displayed as time blocks
Each block spans:
earliest article → latest article
Visual intensity based on article count
 Cluster Detail View

On click:

Shows all articles in cluster
Displays:
headline
source
time
external link

 Source Filter

Toggle news sources:
BBC
NPR
Al Jazeera

 Refresh System

Button triggers:

POST /ingest/trigger

Polls:

GET /ingest/status/:jobId
Updates timeline automatically after completion
 UI Design Philosophy
Timeline-first experience
Minimal clutter
Focus on “story evolution over time”
 Key Challenges Faced
1. RSS inconsistency
Different feeds use different tags and date formats
Solution: normalization layer in Python
2. Full article extraction failures
Some news sites block scraping
Solution:
fallback extractors
graceful failure handling
3. Duplicate story handling
Same article appears in multiple runs
Solution:
hash-based deduplication (title + URL)
4. Timeline readability
Too many clusters can clutter UI
Solution:
intensity scaling
grouping time ranges visually
 Future Improvements
Semantic clustering using embeddings (Sentence-BERT)
Cross-source story merging
Redis-based caching layer
Real-time WebSocket updates
Better NLP-based cluster labeling
 Setup Instructions
1. Clone repo
git clone https://github.com/your-repo/news-pulse
2. Python setup
cd scraper
pip install -r requirements.txt
python main.py
3. Backend setup
cd backend
npm install
npm run dev
4. Frontend setup
cd frontend
npm install
npm run dev
Project Structure
/scraper
   ├── rss_fetcher.py
   ├── extractor.py
   ├── clustering.py
   ├── db.py

/backend
   ├── routes/
   ├── controllers/
   ├── services/
   ├── app.js

/frontend
   ├── pages/
   ├── components/
   ├── lib/
 Author Notes

This project was built as a full-stack engineering exercise focusing on:

Data ingestion from real-world sources
Robust backend API design
Lightweight NLP-based clustering
Interactive frontend visualization




