import React from 'react';

/**
 * Renders the footer.
 */
export default function Footer() {
  return (
    <footer id="main-footer" className="bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col text-center py-4">
            <p>
              Copyright &copy; {new Date().getFullYear()} Fast Food Fast
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
