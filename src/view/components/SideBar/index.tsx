import { ChevronDownIcon } from "@radix-ui/react-icons";
import { SidebarItem } from "./components";
import { Aside, Container } from "./styles";
import { CategoryIcon } from "../Icons/categories/CategoryIcon";
import { useSidebarController } from "./useSideBarController";
import DoubleArrow from "../../components/Icons/DoubleChevron";

import logo from '../../../assets/images/logo.svg';
import { Categories } from "./categories";

export default function SiderBar() {
  const { handleShowSubCategory,
          handleToggleVisibility,
          verifyCategoryIsActive,
          isVisible,
          pathname,
          idCategoryActive,
          user } = useSidebarController();

  const userType  = user?.isCompany ? 'company' : 'candidate';

  return (
    <Aside visible={isVisible}>
      <header>
          <img src={logo} alt="Jobs" width={48} height={48}/>
          <button title={isVisible ? 'Ocultar menu' : 'Exibir menu'} onClick={handleToggleVisibility}>
            <DoubleArrow />
          </button>
      </header>
      <Container>
        {Categories[userType].map((item) => {
          return(
            <SidebarItem.Wrapper key={item.id}>
              <SidebarItem.Root
                path={item.path}
                isActive={item.path === pathname || Boolean(item.sub_category.length > 0 && item.sub_category.find(verifyCategoryIsActive))}
                onClick={() => { handleShowSubCategory(item.id, item.sub_category.length > 0) }}
              >
                <SidebarItem.Container>
                  <SidebarItem.Icon>
                    <CategoryIcon type={user?.isCompany ? 'company' : 'candidate'} category={item.icon_category}/>
                  </SidebarItem.Icon>
                  <span>{item.name}</span>
                </SidebarItem.Container>

                {item.sub_category.length > 0 &&
                  <SidebarItem.Container>
                    <SidebarItem.Icon> <ChevronDownIcon /> </SidebarItem.Icon>
                  </SidebarItem.Container>
                }
              </SidebarItem.Root>

              {item.sub_category.length > 0 &&
                <SidebarItem.SubCategory
                  itemsToShow={item.sub_category.length}
                  toShow={item.id === idCategoryActive || (item.id === idCategoryActive && Boolean(item.sub_category.find(verifyCategoryIsActive) ))}
                >
                  {item.sub_category.map((subCategory) => (
                    <SidebarItem.Root
                      path={subCategory.path}
                      isActive={pathname === subCategory.path}
                      key={subCategory.id}
                      isSubCategory={true}
                    >
                      {subCategory.name}
                    </SidebarItem.Root>
                  ))}
                </SidebarItem.SubCategory>
              }
            </SidebarItem.Wrapper>
          )
        })}
      </Container>
    </Aside>
  )
}
