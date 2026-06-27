export const initialSources = [
  { id: 'bbc', name: 'BBC News', count: 42, checked: true },
  { id: 'reuters', name: 'Reuters', count: 56, checked: true },
  { id: 'npr', name: 'NPR', count: 31, checked: true },
  { id: 'guardian', name: 'The Guardian', count: 29, checked: true },
  { id: 'bloomberg', name: 'Bloomberg', count: 26, checked: true },
  { id: 'wsj', name: 'Wall Street Journal', count: 18, checked: true }
];

export const initialClusters = [
  {
    id: 'cluster-1',
    name: 'Global Semiconductor Tech Surge & Supply Chain Shift',
    articleCount: 28,
    sizeIndicator: 'high',
    timeRange: 'Jun 25, 09:15 AM → Jun 27, 11:30 AM',
    sources: ['BBC News', 'Reuters', 'Bloomberg', 'Wall Street Journal'],
    summary: 'Major chip manufacturers announce unprecedented capital investments into next-generation fabrication facilities across North America and Europe amid shifting export regulations.',
    createdTimestamp: '10 mins ago',
    articles: [
      {
        id: 'art-101',
        title: 'Tech Giants Unveil $40B Next-Gen Foundry Architecture',
        source: 'Reuters',
        publishedTime: 'Jun 27, 2026 • 11:30 AM',
        timestampRaw: 1782559800000,
        snippet: 'Leading semiconductor foundries have reached an historic agreement on standardized 2nm chip production pipelines, driving optimism across hardware stock indices.',
        url: 'https://news.google.com/search?q=Tech+Giants+Unveil+Next-Gen+Foundry+Architecture',
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'art-102',
        title: 'European Union Approves Subsidies for Advanced Microchip Plants',
        source: 'BBC News',
        publishedTime: 'Jun 26, 2026 • 04:15 PM',
        timestampRaw: 1782490500000,
        snippet: 'EU policymakers officially signed off on a landmark incentive package designed to secure domestic silicon supply chains and boost AI hardware resilience.',
        url: 'https://news.google.com/search?q=European+Union+Approves+Subsidies+for+Microchip+Plants',
        imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
];

export const topActiveTopics = [
  { name: 'Semiconductor Fabrication', count: 28, percentage: 100 },
  { name: 'Monetary Policy & Inflation', count: 22, percentage: 78 },
  { name: 'EU AI Regulations', count: 19, percentage: 67 },
  { name: 'Offshore Renewable Grids', count: 16, percentage: 57 },
  { name: 'Lunar Orbit Logistics', count: 14, percentage: 50 }
];
