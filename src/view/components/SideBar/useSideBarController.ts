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
  const [isVisible, seIsVisible] = useState(true);
  const [showSubCategory, setShowSubCategory] = useState(false);
  const { user } = useAuth();

  function handleSetCategoryActive() {
    setShowSubCategory(false);
  }

  function verifyCategoryIsActive(subcategory:Prop) {
    return subcategory.path === pathname;
  }

  function handleShowSubCategory(){
    if(isVisible){
      setShowSubCategory(!showSubCategory);
      return;
    }

    handleToggleVisibility();
    setShowSubCategory(true);
  }

  function handleToggleVisibility() {
    seIsVisible(!isVisible);
  }

  return {
    handleSetCategoryActive,
    handleShowSubCategory,
    handleToggleVisibility,
    verifyCategoryIsActive,
    isVisible,
    pathname,
    showSubCategory,
    user
  }
}
