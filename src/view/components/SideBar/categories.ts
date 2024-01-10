export const Categories = {
  candidate: [
    {
      id: 1,
      name: 'Dashboard',
      path: '/candidate/dashboard',
      icon_category: 'dashboard',
      sub_category: [],
    },
    {
      id: 2,
      name: 'Candidaturas',
      path: '/candidate/applications',
      icon_category: 'backpack',
      sub_category: []
    },
    {
      id: 3,
      name: 'Chat',
      path: '/chat',
      icon_category: 'chat',
      sub_category: [],
    },
    {
      id: 4,
      name: 'Minha Conta',
      path: '',
      icon_category: 'account',
      sub_category: [
        { id: 2, name: 'Currículo', path: '/candidate/curriculum'},
        { id: 3, name: 'Segurança', path: '/candidate/security'},
        { id: 4, name: 'Dados da Conta', path: '/candidate/data'},
        { id: 5, name: 'Privacidade', path: '/candidate/privacy'},
      ],
    },
    {
      id: 5,
      name: 'Preferências',
      path: '/candidate/preferences',
      icon_category: 'preferences',
      sub_category: [],
    },
  ],
  company: [
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
  ],
}
