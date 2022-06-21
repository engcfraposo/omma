import React, { useEffect, useState } from 'react';
import Image from "../../assets/image.png"
import { getRecipes, postRecipes } from '../../services/recipes';
import './styles.css';

interface Recipe {
  id: number;
  title: string;
  image_url: string;
}


const ContentList: React.FC = () => {
  const [recipeList, setRecipeList] = useState<Recipe[]>([] as Recipe[])

  useEffect(()=>{
    getRecipes().then(recipes => setRecipeList(
      recipes.map(recipe => Object.assign(recipe, {
        ...recipe,
        image_url: Image
      }))
    ))
  },[])

  const handleAddRecipe = async () => {
    const newRecipe = await postRecipes({
      title: "Receita",
      image_url: Image
    })
    setRecipeList(oldRecipeList => [...oldRecipeList, newRecipe])
  }
  
  return (
      <main className="content-container">
          <h1>
          todas as receitas
          </h1>
          <div className="grid-container">
            {recipeList.map(recipe=>(
              <div className="grid-item" key={recipe.id}>
                <div className="card-container">
                  <img src={recipe.image_url} alt={recipe.title} />
                  <span>
                    {recipe.title}
                  </span>
                  <button>
                      Conferir
                  </button>
                </div>
              </div>
            ))}
              
          </div>
          <button onClick={handleAddRecipe}>Inserir Receita</button>
      </main>
  );
}

export default ContentList;