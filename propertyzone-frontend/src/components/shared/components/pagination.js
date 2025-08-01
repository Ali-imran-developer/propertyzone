const pagination = ({
  length = 0,
  currentLimit = 12,
  currentPage = 1,
  setCurrentLimit,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(length / currentLimit);

  return (
    <div className="ltn__pagination-area text-center">
      <div
        className="ltn__pagination"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {/* Left: Limit Selector */}
        <div className="" style={{ marginTop: "15px" }}>
          <select
            value={currentLimit}
            onChange={(e) => {
              setCurrentLimit(Number(e.target.value));
              setCurrentPage(1);
            }}
            style={{
              padding: "8px 14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              fontSize: "14px",
              cursor: "pointer",
              outline: "none",
            }}
          >
            {[12, 20, 30, 50, 100].map((option) => (
              <option key={option} value={option}>
                Per Page: {option}
              </option>
            ))}
          </select>
        </div>

        {/* Center: Pagination */}
        <ul style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <li>
            <button
              style={{
                color: "white",
                backgroundColor: "#ff5a3c",
                borderRadius: "50%",
                padding: "12px",
                width: "50px",
                opacity: currentPage === 1 || totalPages === 0 ? 0.5 : 1,
                cursor: currentPage === 1 || totalPages === 0 ? "not-allowed" : "pointer",
              }}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1 || totalPages === 0}
            >
              <i className="fas fa-angle-double-left" />
            </button>
          </li>

          {[...Array(totalPages).keys()].slice(0, 3).map((n) => (
            <li key={n + 1} className={currentPage === n + 1 ? "active" : ""}>
              <button
                style={{
                  borderRadius: "50%",
                  padding: "12px",
                  width: "50px",
                  backgroundColor: currentPage === n + 1 ? "#ff5a3c" : "#eee",
                  color: currentPage === n + 1 ? "white" : "#333",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setCurrentPage(n + 1)}
              >
                {n + 1}
              </button>
            </li>
          ))}

          {totalPages > 3 && <li>...</li>}

          {totalPages > 3 && (
            <li className={currentPage === totalPages ? "active" : ""}>
              <button
                style={{
                  padding: "12px",
                  borderRadius: "50%",
                  width: "50px",
                  backgroundColor: currentPage === totalPages ? "#ff5a3c" : "#eee",
                  color: currentPage === totalPages ? "white" : "#333",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setCurrentPage(totalPages)}
              >
                {totalPages}
              </button>
            </li>
          )}

          <li>
            <button
              style={{
                color: "white",
                backgroundColor: "#ff5a3c",
                borderRadius: "50%",
                padding: "12px",
                width: "50px",
                opacity: currentPage === totalPages || totalPages === 0 ? 0.5 : 1,
                cursor: currentPage === totalPages || totalPages === 0 ? "not-allowed" : "pointer",
              }}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || totalPages === 0}
            >
              <i className="fas fa-angle-double-right" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default pagination;