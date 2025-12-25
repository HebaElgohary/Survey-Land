
const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About Our Company
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              This is a modern React application built as a learning project for
              interns. It demonstrates best practices in frontend development
              using cutting-edge technologies.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                • <strong>React 18</strong> - Latest version with Concurrent
                Features
              </li>
              <li>
                • <strong>TypeScript</strong> - Type safety and better developer
                experience
              </li>
              <li>
                • <strong>Vite</strong> - Lightning fast build tool and dev
                server
              </li>
              <li>
                • <strong>Tailwind CSS</strong> - Utility-first CSS framework
              </li>
              <li>
                • <strong>React Router</strong> - Client-side routing
              </li>
              <li>
                • <strong>TanStack Query</strong> - Powerful data
                synchronization
              </li>
              <li>
                • <strong>Shadcn/ui</strong> - High-quality component library
              </li>
              <li>
                • <strong>ESLint & Prettier</strong> - Code quality and
                formatting
              </li>
            </ul>
            <h1 className="text-secondary">Survey Infinity</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Project Structure
            </h2>
            <p className="text-gray-600">
              The application follows a scalable architecture pattern with clear
              separation of concerns. Check the Architecture.md file for
              detailed documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
