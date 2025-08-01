
export const Loader = () => {
  return (
    <div className="col-lg-12">
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "500px" }}>
        <div className="text-center">
          <div className="property-loader mb-4">
            <div className="loader-house">
              <div className="house-base"></div>
              <div className="house-roof"></div>
              <div className="house-door"></div>
              <div className="house-window-1"></div>
              <div className="house-window-2"></div>
            </div>
          </div>
          <h5 className="text-primary mb-2">Finding Perfect Properties</h5>
          <p className="text-muted">Please wait while we search for available properties...</p>
          
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .property-loader {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 0 auto;
        }
        
        .loader-house {
          position: relative;
          width: 60px;
          height: 60px;
          animation: bounce 2s infinite;
        }
        
        .house-base {
          width: 40px;
          height: 30px;
          background: #007bff;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        
        .house-roof {
          width: 0;
          height: 0;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 20px solid #dc3545;
          position: absolute;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .house-door {
          width: 8px;
          height: 15px;
          background: #28a745;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .house-window-1, .house-window-2 {
          width: 6px;
          height: 6px;
          background: #ffc107;
          position: absolute;
          top: 35px;
        }
        
        .house-window-1 {
          left: 18px;
        }
        
        .house-window-2 {
          right: 18px;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .loading-dots {
          display: inline-flex;
          gap: 4px;
          margin-top: 10px;
        }
        
        .loading-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #007bff;
          animation: loading-dots 1.4s infinite ease-in-out both;
        }
        
        .loading-dots span:nth-child(1) {
          animation-delay: -0.32s;
        }
        
        .loading-dots span:nth-child(2) {
          animation-delay: -0.16s;
        }
        
        @keyframes loading-dots {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div className="ltn__product-item ltn__product-item-4 text-center---">
      <div className="product-img go-top">
        <div 
          className="skeleton-img"
          style={{
            minWidth: "18rem",
            height: "12rem",
            backgroundColor: "#f0f0f0",
            borderRadius: "4px",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div className="skeleton-shimmer"></div>
        </div>
      </div>
      <div className="product-info pb-4">
        <div className="skeleton-price" style={{ height: "20px", backgroundColor: "#f0f0f0", margin: "10px 0", borderRadius: "4px" }}></div>
        <div className="skeleton-title" style={{ height: "16px", backgroundColor: "#f0f0f0", margin: "8px 0", borderRadius: "4px", width: "80%" }}></div>
        <div className="skeleton-desc" style={{ height: "14px", backgroundColor: "#f0f0f0", margin: "8px 0", borderRadius: "4px", width: "60%" }}></div>
        
        <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
          <div className="skeleton-feature" style={{ height: "12px", backgroundColor: "#f0f0f0", borderRadius: "4px", flex: 1 }}></div>
          <div className="skeleton-feature" style={{ height: "12px", backgroundColor: "#f0f0f0", borderRadius: "4px", flex: 1 }}></div>
          <div className="skeleton-feature" style={{ height: "12px", backgroundColor: "#f0f0f0", borderRadius: "4px", flex: 1 }}></div>
        </div>
      </div>

      <style jsx>{`
        .skeleton-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
};
