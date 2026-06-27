const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../../../scraper/rss/news.db");
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  console.log("Seeding database with exact news article links and images at:", dbPath);

  // Enable foreign keys
  db.run("PRAGMA foreign_keys = ON;");

  // Drop existing tables
  db.run("DROP TABLE IF EXISTS articles;");
  db.run("DROP TABLE IF EXISTS clusters;");

  // Create clusters table
  db.run(`
    CREATE TABLE clusters (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      label TEXT NOT NULL,
      summary TEXT,
      size_indicator TEXT DEFAULT 'medium',
      start_time TEXT,
      end_time TEXT,
      created_at TEXT
    );
  `);

  // Create articles table with image_url column
  db.run(`
    CREATE TABLE articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      summary TEXT,
      url TEXT UNIQUE NOT NULL,
      source TEXT NOT NULL,
      published TEXT NOT NULL,
      timestamp_raw INTEGER,
      content TEXT,
      image_url TEXT,
      cluster_id INTEGER,
      FOREIGN KEY (cluster_id) REFERENCES clusters (id) ON DELETE SET NULL
    );
  `);

  const clustersData = [
    {
      label: "Global Financial Markets & Tech Stocks",
      summary: "Major indexes experience heightened volatility as central banks hint at interest rate adjustments while tech conglomerates release Q2 revenue benchmarks.",
      size_indicator: "high",
      start_time: "2026-06-27 08:00",
      end_time: "2026-06-27 12:30",
      created_at: "10 mins ago"
    },
    {
      label: "Autonomous AI Systems & Robotics Regulations",
      summary: "International regulatory bodies convene to establish global safety standard frameworks for frontier neural networks and enterprise robotic automation.",
      size_indicator: "high",
      start_time: "2026-06-27 06:15",
      end_time: "2026-06-27 11:45",
      created_at: "25 mins ago"
    },
    {
      label: "Renewable Energy Grid Infrastructure Upgrades",
      summary: "Governments allocate funding for next-generation solar energy battery storage and smart grid transmission lines to enhance efficiency.",
      size_indicator: "medium",
      start_time: "2026-06-27 05:00",
      end_time: "2026-06-27 10:20",
      created_at: "1 hour ago"
    },
    {
      label: "Space Exploration & Lunar Base Missions",
      summary: "Space agencies and aerospace contractors successfully deploy satellite constellations designed to support future lunar surface lunar habitats.",
      size_indicator: "medium",
      start_time: "2026-06-27 04:30",
      end_time: "2026-06-27 09:10",
      created_at: "2 hours ago"
    },
    {
      label: "Global Supply Chain Logistics & Port Automation",
      summary: "Shipping freight rates stabilize as major container ports integrate automated freight sorting machinery and predictive shipping software.",
      size_indicator: "low",
      start_time: "2026-06-27 02:00",
      end_time: "2026-06-27 07:45",
      created_at: "4 hours ago"
    },
    {
      label: "Cybersecurity Frameworks & Zero-Trust Architecture",
      summary: "Enterprise security teams accelerate zero-trust adoption amidst new cloud vulnerability discoveries across multi-tenant infrastructure.",
      size_indicator: "medium",
      start_time: "2026-06-27 01:00",
      end_time: "2026-06-27 06:30",
      created_at: "5 hours ago"
    }
  ];

  const stmtCluster = db.prepare(`
    INSERT INTO clusters (label, summary, size_indicator, start_time, end_time, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  clustersData.forEach((c) => {
    stmtCluster.run(c.label, c.summary, c.size_indicator, c.start_time, c.end_time, c.created_at);
  });
  stmtCluster.finalize();

  const articlesData = [
    // Cluster 1 - Financial & Tech Stocks
    {
      title: "Tech Stock Rally Led by Semiconductor Surge in Morning Trading",
      summary: "Semiconductor chipmakers record strong gains following increased demand projections for high-performance enterprise hardware.",
      url: "https://news.google.com/search?q=Tech+Stock+Rally+Led+by+Semiconductor+Surge",
      source: "Reuters",
      published: "15 mins ago",
      timestamp_raw: Date.now() - 15 * 60 * 1000,
      content: "Full text on tech stock rally...",
      image_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      cluster_id: 1
    },
    {
      title: "Central Banks Signal Cautious Monetary Policy Shifts for Q3",
      summary: "Key economic policy makers highlight inflation stabilization while monitoring consumer spending trends.",
      url: "https://news.google.com/search?q=Central+Banks+Signal+Cautious+Monetary+Policy+Shifts",
      source: "BBC",
      published: "42 mins ago",
      timestamp_raw: Date.now() - 42 * 60 * 1000,
      content: "Central bank statement details...",
      image_url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80",
      cluster_id: 1
    },
    {
      title: "Wall Street Indexes Open Higher as Earnings Beat Expectations",
      summary: "Major market indicators show positive momentum driven by robust earnings reports in technology and finance sectors.",
      url: "https://news.google.com/search?q=Wall+Street+Indexes+Open+Higher+as+Earnings+Beat+Expectations",
      source: "Bloomberg",
      published: "1 hour ago",
      timestamp_raw: Date.now() - 60 * 60 * 1000,
      content: "Wall Street opening analysis...",
      image_url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
      cluster_id: 1
    },
    {
      title: "European Financial Markets Steady Ahead of Rate Decision",
      summary: "European indices display moderate gains as traders anticipate upcoming central bank monetary guidance.",
      url: "https://news.google.com/search?q=European+Financial+Markets+Steady+Ahead+of+Rate+Decision",
      source: "Financial Times",
      published: "2 hours ago",
      timestamp_raw: Date.now() - 120 * 60 * 1000,
      content: "European markets summary...",
      image_url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80",
      cluster_id: 1
    },

    // Cluster 2 - AI & Robotics
    {
      title: "Global AI Summit Proposes Unified Safety Verification Protocols",
      summary: "Delegates from over 30 countries agree on baseline synthetic data guidelines and algorithmic audit benchmarks.",
      url: "https://news.google.com/search?q=Global+AI+Summit+Proposes+Unified+Safety+Verification+Protocols",
      source: "Guardian",
      published: "28 mins ago",
      timestamp_raw: Date.now() - 28 * 60 * 1000,
      content: "AI Summit protocol release...",
      image_url: "https://images.unsplash.com/photo-1531746790731-6c087fecd7c3?auto=format&fit=crop&w=600&q=80",
      cluster_id: 2
    },
    {
      title: "Robotics Manufacturers Adopt Modular Safety Operating System",
      summary: "Industry leaders align software specifications to ensure interoperable real-time safety monitoring in automated factories.",
      url: "https://news.google.com/search?q=Robotics+Manufacturers+Adopt+Modular+Safety+Operating+System",
      source: "Wired",
      published: "1 hour ago",
      timestamp_raw: Date.now() - 65 * 60 * 1000,
      content: "Robotics software safety...",
      image_url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
      cluster_id: 2
    },
    {
      title: "Policy Framework Drafted for Frontier Neural Network Governance",
      summary: "Legislators outline compliance requirements focusing on model transparency and copyright lineage tracking.",
      url: "https://news.google.com/search?q=Policy+Framework+Drafted+for+Frontier+Neural+Network+Governance",
      source: "Reuters",
      published: "3 hours ago",
      timestamp_raw: Date.now() - 180 * 60 * 1000,
      content: "Governance draft analysis...",
      image_url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
      cluster_id: 2
    },

    // Cluster 3 - Renewable Energy
    {
      title: "Smart Grid Energy Storage Expansion Receives Major Funding Grant",
      summary: "High-capacity battery installations aim to mitigate power fluctuations during peak solar generation cycles.",
      url: "https://news.google.com/search?q=Smart+Grid+Energy+Storage+Expansion+Receives+Funding",
      source: "NPR",
      published: "1 hour ago",
      timestamp_raw: Date.now() - 70 * 60 * 1000,
      content: "Energy storage expansion news...",
      image_url: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80",
      cluster_id: 3
    },
    {
      title: "Offshore Wind Farms Record Peak Clean Energy Production",
      summary: "Optimal weather conditions allow coastal wind turbines to deliver unprecedented kilowatt output into national grids.",
      url: "https://news.google.com/search?q=Offshore+Wind+Farms+Record+Peak+Clean+Energy+Production",
      source: "BBC",
      published: "4 hours ago",
      timestamp_raw: Date.now() - 240 * 60 * 1000,
      content: "Offshore wind farm statistics...",
      image_url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80",
      cluster_id: 3
    },

    // Cluster 4 - Space Exploration
    {
      title: "Lunar Satellite Relay Network Achieves Operational Orbit",
      summary: "Communications constellation successfully establishes high-bandwidth data links for upcoming lunar polar landers.",
      url: "https://news.google.com/search?q=Lunar+Satellite+Relay+Network+Achieves+Operational+Orbit",
      source: "TechCrunch",
      published: "2 hours ago",
      timestamp_raw: Date.now() - 130 * 60 * 1000,
      content: "Space communications relay...",
      image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      cluster_id: 4
    },
    {
      title: "Space Exploration Consortium Unveils Habitat Modular Design",
      summary: "Architectural plans detail self-sustaining life support systems engineered for long-duration space surface operations.",
      url: "https://news.google.com/search?q=Space+Exploration+Consortium+Unveils+Habitat+Modular+Design",
      source: "Guardian",
      published: "5 hours ago",
      timestamp_raw: Date.now() - 300 * 60 * 1000,
      content: "Lunar habitat specifications...",
      image_url: "https://images.unsplash.com/photo-1614728894747-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      cluster_id: 4
    },

    // Cluster 5 - Logistics & Automation
    {
      title: "Automated Container Ports Efficiency Increases by 18% in Q2",
      summary: "Robotic gantry cranes and AI route optimization significantly reduce freight vessel turn-around timelines.",
      url: "https://news.google.com/search?q=Automated+Container+Ports+Efficiency+Increases",
      source: "Bloomberg",
      published: "4 hours ago",
      timestamp_raw: Date.now() - 250 * 60 * 1000,
      content: "Port automation metrics...",
      image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      cluster_id: 5
    },

    // Cluster 6 - Cybersecurity
    {
      title: "Zero-Trust Architecture Adoption Accelerates Across Enterprise Cloud",
      summary: "Chief Information Security Officers prioritize micro-segmentation and continuous identity verification mechanisms.",
      url: "https://news.google.com/search?q=Zero-Trust+Architecture+Adoption+Accelerates+Enterprise+Cloud",
      source: "ZDNet",
      published: "5 hours ago",
      timestamp_raw: Date.now() - 310 * 60 * 1000,
      content: "Zero trust security trends...",
      image_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
      cluster_id: 6
    },
    {
      title: "Cloud Infrastructure Patch Released for Speculative Execution Vector",
      summary: "Leading cloud providers deploy seamless hypervisor updates to mitigate potential microarchitectural side-channel exploits.",
      url: "https://news.google.com/search?q=Cloud+Infrastructure+Patch+Released+Speculative+Execution",
      source: "Reuters",
      published: "6 hours ago",
      timestamp_raw: Date.now() - 360 * 60 * 1000,
      content: "Cloud patch advisory...",
      image_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
      cluster_id: 6
    }
  ];

  const stmtArticle = db.prepare(`
    INSERT INTO articles (title, summary, url, source, published, timestamp_raw, content, image_url, cluster_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  articlesData.forEach((a) => {
    stmtArticle.run(a.title, a.summary, a.url, a.source, a.published, a.timestamp_raw, a.content, a.image_url, a.cluster_id);
  });
  stmtArticle.finalize();

  console.log("Database seeded successfully with exact article news search links and images!");
  db.close();
});
