import { ChevronDownIcon } from "@radix-ui/react-icons";
import { SidebarItem } from "./components";
import { Aside, Container } from "./styles";
import { CategoryIcon } from "../Icons/categories/CategoryIcon";
import { useSidebarController } from "./useSideBarController";
import DoubleArrow from "../../components/Icons/DoubleChevron";

import logo from '../../../assets/images/logo.svg'

const links = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/company/dashboard',
    icon_category: 'dashboard',
    sub_category: [],
  },
  {
    id: 2,
    name: 'Candidaturas',
    path: '/company/applications',
    icon_category: 'backpack',
    sub_category: []
  },
  {
    id: 3,
    name: 'Chat',
    path: '/chat',
    icon_category: 'chat',
    badge: 4,
    sub_category: [],
  },
  {
    id: 4,
    name: 'Minha Conta',
    path: '',
    icon_category: 'account',
    sub_category: [
      { id: 2, name: 'Currículo', path: '/company/curriculum'},
      { id: 3, name: 'Segurança', path: '/company/security'},
      { id: 4, name: 'Dados da Conta', path: '/company/data'},
      { id: 5, name: 'Privacidade', path: '/company/privacy'},
    ],
  },
  {
    id: 5,
    name: 'Preferências',
    path: '/company/preferences',
    icon_category: 'preferences',
    sub_category: [],
  },
];

export default function SiderBar() {
  const { handleSetCategoryActive,
          handleShowSubCategory,
          handleToggleVisibility,
          verifyCategoryIsActive,
          isVisible,
          pathname,
          showSubCategory,
          user } = useSidebarController();

  return (
    <Aside visible={isVisible}>
      <header>
          <img src={logo} alt="Jobs" width={48} height={48}/>
          <button title={isVisible ? 'Ocultar menu' : 'Exibir menu'} onClick={handleToggleVisibility}>
            <DoubleArrow />
          </button>
      </header>
      <Container>
        {links.map((item) => {
          return(
            <SidebarItem.Wrapper key={item.id}>
              <SidebarItem.Root
                path={item.path}
                isActive={item.path === pathname || Boolean(item.sub_category.length > 0 && item.sub_category.find(verifyCategoryIsActive))}
                setItemActive={() => { item.sub_category.length > 0 ? handleShowSubCategory() : handleSetCategoryActive()}}
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
                  toShow={showSubCategory}
                >
                  {item.sub_category.map((subCategory) => (
                    <SidebarItem.Root
                      path={subCategory.path}
                      isActive={pathname === subCategory.path}
                      key={subCategory.id}
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
