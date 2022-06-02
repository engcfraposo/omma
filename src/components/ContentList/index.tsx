import React from 'react';
import Image from "../../assets/image.png"

import './styles.css';

const ContentList: React.FC = () => {
  return (
      <main className="content-container">
          <h1>
          todas as receitas
          </h1>
          <div className="grid-container">
            {[1,2,3,4].map(qty=>(
                <div className="grid-item">
                <div className="card-container">
                  <img src={Image} alt="" />
                  <span>
                    Risoto
                  </span>
                  <button>
                      Conferir
                  </button>
                </div>
                
            </div>
            ))}
              
          </div>
      </main>
  );
}

export default ContentList;