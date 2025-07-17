import { useState, useRef, useEffect } from "react";

const InfoTooltip = ({ product }) => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState("right");
  const containerRef = useRef(null);

  useEffect(() => {
    if (show && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const tooltipWidth = 300;
      const padding = 10;

      if (rect.left + tooltipWidth + padding > window.innerWidth) {
        setPosition("left");
      } else {
        setPosition("right");
      }
    }
  }, [show]);

  return (
    <div
      ref={containerRef}
      className="info-tooltip-container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className="question-mark">?</span>

      {show && (
        <div className={`tooltip-popup ${position}`}>
          <div className="tooltip-content">
            <img
              src={product.image}
              alt={product.name}
              className="tooltip-image"
            />
            <div className="tooltip-text">
              <h4 className="description-title">Description</h4>
              <p className="tooltip-description">{product.description}</p>

              <h4 className="features-title">Key Features</h4>
              <ul className="tooltip-features">
                {product.keyFeatures?.map((feature, index) => (
                  <li key={index}>
                    <div className="feature-name">
                      <strong>{feature.name}:</strong>
                    </div>
                    <div className="feature-value">{feature.value}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoTooltip;
