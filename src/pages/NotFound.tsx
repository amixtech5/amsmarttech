import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding min-h-[60vh] flex items-center">
        <div className="section-container">
          <div className="max-w-lg mx-auto text-center">
            {/* 404 */}
            <div className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</div>
            
            {/* Message */}
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h1>
            <p className="text-muted-foreground mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="btn-primary">
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-secondary"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
