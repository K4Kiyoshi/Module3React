export default [

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu',
    route: '/menus',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Test Code',
        to: '/menus/TestCode',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Menu',
        to: '/menus/NewMenu',
      },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu - 2',
    route: '/menus',
    icon: 'cil-moon',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Home',
        to: '/home',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
      },
    ]
  },
  
]

