# Authentication App with Tailwind CSS

A modern authentication application built with Next.js 15, TypeScript, and Tailwind CSS. Features a clean, responsive design with blue and black theme styling.

## 🚀 Features

- **Modern Authentication Flow**: Complete signup, signin, and email verification
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety and better development experience
- **Next.js 15**: Latest features with App Router
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **NextAuth.js**: Secure authentication with credentials provider
- **Email Verification**: OTP-based email verification system

## 📱 Pages

### 1. **Sign In Page** (`/signin`)
- Clean login form with email and password fields
- Form validation and error handling
- "Don't have an account? Sign Up" link
- Indigo/blue themed buttons

### 2. **Sign Up Page** (`/signup`)
- Complete registration form with labels
- Google Sign Up button (styled)
- Password confirmation
- Blue and black button theme
- Form validation and error handling

### 3. **Email Verification Page** (`/verify-email`)
- OTP input with 4-digit code
- Auto-focus and tab navigation
- Purple-themed styling
- Resend code functionality
- Clean, centered layout

## 🎨 Design Theme

- **Primary Colors**: Blue (`#3B82F6`) and Black (`#000000`)
- **Background**: Light gray (`#F9FAFB`)
- **Form Elements**: White backgrounds with gray borders
- **Buttons**: Blue and black variants
- **Typography**: Clean, readable fonts with proper hierarchy

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.0
- **Authentication**: NextAuth.js
- **Development**: Turbopack for faster builds
- **Package Manager**: npm

## 📦 Dependencies

### Core Dependencies
- `next`: 15.4.5
- `react`: 19.1.0
- `react-dom`: 19.1.0
- `next-auth`: ^4.24.11

### Development Dependencies
- `typescript`: ^5
- `tailwindcss`: ^3.4.0
- `autoprefixer`: ^10.4.21
- `postcss`: ^8.5.6
- `eslint`: ^9
- `@types/react`: ^19
- `@types/react-dom`: ^19

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task8
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
task8/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Redirect to signin
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Tailwind imports
│   │   ├── signin/
│   │   │   └── page.tsx          # Login page
│   │   ├── signup/
│   │   │   └── page.tsx          # Registration page
│   │   ├── verify-email/
│   │   │   └── page.tsx          # Email verification
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Dashboard (after login)
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...nextauth]/
│   │   │           └── options.ts # NextAuth configuration
│   │   └── types/
│   │       └── next-auth.d.ts    # TypeScript declarations
├── public/
│   └── google.png                # Google logo
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🎯 Key Features

### Authentication Flow
1. **Sign Up**: User registers with email and password
2. **Email Verification**: OTP sent to user's email
3. **Sign In**: User logs in with credentials
4. **Dashboard**: Protected route after successful login

### UI/UX Features
- **Responsive Design**: Works on all screen sizes
- **Form Validation**: Real-time validation and error messages
- **Loading States**: Proper loading indicators
- **Accessibility**: ARIA labels and keyboard navigation
- **Focus Management**: Auto-focus and tab navigation

### Security Features
- **Password Hashing**: Secure password storage
- **JWT Tokens**: Secure session management
- **CSRF Protection**: Built-in NextAuth protection
- **Input Sanitization**: XSS prevention

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Content paths for all app directories
- Custom color schemes
- Responsive breakpoints
- Focus and hover states

## 📸 Screenshots

Screenshots of the application are available in the `/screenshots` folder:
- Sign In page
- Sign Up page  
- Email Verification page
- Dashboard page

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- NextAuth.js for secure authentication
- A2SV for the project requirements

---

**Built with ❤️ using Next.js and Tailwind CSS**
