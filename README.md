# PIE - Personalized Investment Engine

An intelligent learning tool that provides investment suggestions (not financial advice) based on what you like to do in your free time!

## Features

- **AI-Powered Recommendations**: Leverages Claude AI to provide intelligent, personalized investment suggestions
- **Form Validation**: Robust form handling with Conform and Zod for reliable data validation
- **Real-Time Notifications**: Toast notifications via React Hot Toast for user feedback
- **State Management**: Efficient state management with Zustand
- **Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS
- **Smooth Animations**: Engaging UI interactions with Motion animations
- **Type-Safe Development**: Full TypeScript support for code reliability

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.0.10
- **UI Library**: [React](https://react.dev/) 19.2.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **AI Integration**: [Anthropic Claude SDK](https://docs.anthropic.com/) 0.71.2
- **Form Handling**: [Conform](https://conform.guide/) with [Zod](https://zod.dev/) validation
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) 5.0.9
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/) 2.6.0
- **Animations**: [Motion](https://motion.dev/)
- **Language**: TypeScript 5
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 18+ and yarn installed
- Anthropic API key for Claude AI integration

### Installation

1. Clone the repository:
```bash
git clone https://github.com/numenor-dev/pie.git
cd pie
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Anthropic API key to `.env.local`:
```
ANTHROPIC_API_KEY=your_api_key_here
```

### Development

Start the development server:
```bash
yarn next dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production

Build for production:
```bash
yarn next build
yarn start
```

## Scripts

- `yarn next dev` - Start development server with hot reload
- `yarn next build` - Build the application for production
- `yarn start` - Start the production server
- `yarn lint` - Run ESLint to check code quality

## Project Structure

```
pie/
├── app/                    # Next.js app directory
├── components/             # React components
├── lib/                    # Utility functions and helpers
├── public/                 # Static assets
├── .env.local             # Environment variables (create from .env.example)
├── package.json
└── tsconfig.json
```

## Environment Variables

- `ANTHROPIC_API_KEY` - Your Anthropic API key for Claude AI access

## How It Works

PIE uses the Anthropic Claude API to analyze user financial information and provide personalized investment recommendations. Users fill out forms detailing their investment goals, risk tolerance, and financial situation, which are then processed by Claude to generate tailored advice.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private. For licensing information, please contact the repository maintainer.

## Questions?

If you have any questions or need help, please open an issue on the repository.