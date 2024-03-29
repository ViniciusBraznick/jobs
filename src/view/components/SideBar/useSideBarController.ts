import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../app/hooks/useAuth";

interface Prop {
  id: number,
  name: string,
  path: string,
}

export function useSidebarController(){
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [idCategoryActive, setIdCategoryActive] = useState(0);
  const { user } = useAuth();

  function verifyCategoryIsActive(subcategory:Prop) {
    return subcategory.path === pathname;
  }

  function handleShowSubCategory(id: number, hasSubCategory: boolean){
    if(id === idCategoryActive && isVisible){
      setIdCategoryActive(0)
      return
    }

    if(!isVisible && hasSubCategory){
      setIsVisible(true);
    }

    setIdCategoryActive(id);
  }

  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }

  return {
    handleShowSubCategory,
    handleToggleVisibility,
    verifyCategoryIsActive,
    isVisible,
    pathname,
    user,
    idCategoryActive
  }
}
