# News Pulse AI 📰

A modern, AI-powered news aggregation dashboard that collects, clusters, and displays real-time news from multiple sources. Built with Node.js, Next.js, Prisma, and PostgreSQL.

## 🌟 Features

- **Real-time News Aggregation**: Automatically fetches news from multiple RSS feeds
- **AI-Powered Clustering**: Groups related articles using machine learning algorithms
- **Beautiful Dashboard**: Modern, responsive UI with smooth animations and interactions
- **Live Updates**: Stream real-time news updates to the dashboard
- **Timeline View**: Visualize news chronologically
- **Trending Topics**: Identify and display trending topics
- **Search Functionality**: Search articles across all sources
- **Theme Support**: Dark and light mode support

## 🏗️ Project Structure

```
news-pulse/
├── backend/                 # Node.js Express API
│   ├── src/
│   │   ├── app.js          # Express app configuration
│   │   ├── server.js       # Server entry point
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── utils/          # Utility functions
│   └── prisma/             # Database schema
├── frontend/               # Next.js React app
│   ├── app/                # Next.js app directory
│   ├── components/         # React components
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API services
│   ├── types/              # TypeScript types
│   └── utils/              # Utility functions
├── scraper/                # Python RSS scraper
│   └── rss/                # RSS parsing and clustering logic
└── frontend_backup/        # Previous version backup

```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Python 3.8+
- PostgreSQL 12+
- Git

### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment variables
# Create .env file with DATABASE_URL and PORT

# Initialize database
npx prisma db push

# Start the server
npm run dev
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Scraper Setup

```bash
cd scraper

# Install Python dependencies
pip install -r requirements.txt

# Run the scraper
python -m rss.main
```

## 📝 Environment Variables

### Backend (.env)

```env
DATABASE_URL="postgresql://user:password@localhost:5432/newsdb"
PORT=5000
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 🔌 API Endpoints

### Articles

- `GET /api/articles` - Get all articles
- `GET /api/articles/:id` - Get article by ID
- `POST /api/articles` - Create new article
- `GET /api/articles/search?q=query` - Search articles

### Health

- `GET /health` - Health check endpoint

## 🛠️ Tech Stack

### Backend
- **Express.js** - Web framework
- **Prisma** - ORM
- **PostgreSQL** - Database
- **Node.js** - Runtime

### Frontend
- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

### Scraper
- **Python** - Language
- **feedparser** - RSS parsing
- **SQLAlchemy** - Database ORM
- **scikit-learn** - Machine learning for clustering

## 📊 Database Schema

The application uses Prisma ORM with the following main models:

- **Article** - News articles
- **Source** - News sources/feeds
- **Cluster** - AI-generated article clusters
- **Topic** - Trending topics
- **User** - User preferences and history

## 🎨 UI Features

- **Animated Components**: Smooth fade-in, slide-up animations
- **Interactive Cards**: Hover effects with glow and scale transforms
- **Gradient Design**: Modern gradient backgrounds and text
- **Responsive Layout**: Mobile, tablet, and desktop support
- **Dark/Light Themes**: System preference detection with manual toggle

## 📦 Scripts

### Backend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Authors

- **Your Name** - Initial work

## 🙏 Acknowledgments

- Inspired by modern news aggregation platforms
- Built with modern web technologies and best practices
- Community feedback and contributions

## 📞 Support

For support, email support@newspulse.ai or open an issue on GitHub.

---

**Built with ❤️ for real-time storytelling**
